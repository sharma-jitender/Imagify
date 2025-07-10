import React from "react";
import { assets } from "../assets/assets";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 ">
        Create AI images
      </h1>
      <p className="text-gray-500 mb-8 ">Turn your imagination into visuals</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src={assets.sample_img_1}
          alt=""
          className="w-80 xl:w-96 rounded-lg "
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4 ">
            Introducing the AI-prowered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Bring your ideas to life effortlessly with our powerful and free AI
            image generator. Whether you're a designer, creator, marketer, or
            just exploring your imagination, our tool helps you turn simple text
            prompts into stunning, high-quality visuals in seconds. From concept
            to creation, just imagine it, describe it, and watch your vision
            come alive — no design skills needed, just a few clicks away.
          </p>
          <p className="text-gray-600">
            Simply type a text prompt, and our cutting-edge AI will generate
            high-quality images within seconds. Whether you need product
            visuals, character designs, portraits, or even imaginative concepts
            that don’t exist yet, our tool brings your vision to life with ease.
            Powered by advanced AI technology, the creative possibilities are
            truly limitless — no artistic skills required, just your
            imagination.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
