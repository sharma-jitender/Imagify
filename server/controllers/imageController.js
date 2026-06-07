import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";

export const generateImage = async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const userId = req.userId; 

    const user = await userModel.findById(userId);

      if (!prompt) {
        return res.status(400).json({ success: false, message: "Missing Details" });
      }

      // Atomically decrement one credit if available to avoid race conditions
      let reserved = false;
      const updatedUser = await userModel.findOneAndUpdate(
        { _id: userId, creditBalance: { $gt: 0 } },
        { $inc: { creditBalance: -1 } },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(402).json({
          success: false,
          message: "NO Credit Balance",
          creditBalance: user ? user.creditBalance : 0,
        });
      }
      // flag that we've reserved a credit so we can refund on failure
      reserved = true;
    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    res.json({
      success: true,
      message: "Image generated",
      creditBalance: updatedUser.creditBalance,
      resultImage,
    });
  } catch (error) {
    console.log(error.message);
    // If we reserved a credit but the external API failed, refund it
    try {
      if (reserved) {
        await userModel.findByIdAndUpdate(req.userId, { $inc: { creditBalance: 1 } });
      }
    } catch (e) {
      console.error("Failed to refund credit after error:", e.message);
    }

    res.status(500).json({ success: false, message: error.message });
  }
};