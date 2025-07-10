# Imagify

Imagify is a full-stack AI-powered web application that allows users to generate stunning images from text prompts. Users can register, log in, generate images using AI, and purchase credits to continue using the service. The app features a modern UI, authentication, credit management, and payment integration (Razorpay).

## Features
- ✨ Generate images from text prompts using AI
- 🔒 User authentication (register/login/logout)
- 💳 Credit system for image generation
- 🛒 Purchase credits via Razorpay
- 📈 Responsive and modern UI
- 🗂️ User profile and credit balance display

## Tech Stack
- **Frontend:** React, Vite, Context API, Axios, Framer Motion, React Toastify
- **Backend:** Node.js, Express, MongoDB, JWT, Razorpay API
- **AI API:** ClipDrop (or similar text-to-image API)

## Getting Started

### Prerequisites
- Node.js & npm
- MongoDB (local or cloud)
- Razorpay account (for payments)
- ClipDrop API key (or your chosen AI image API)

### 1. Clone the Repository
```sh
git clone https://github.com/YOUR-USERNAME/Imagify.git
cd Imagify
```

### 2. Setup the Backend
```sh
cd server
npm install
```
Create a `.env` file in the `server/` directory with the following:
```
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIPDROP_API=your_clipdrop_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```
Start the backend:
```sh
npm start
```

### 3. Setup the Frontend
```sh
cd ../client
npm install
```
Create a `.env` file in the `client/` directory with:
```
VITE_BACKEND_URL=http://localhost:4000
```
Start the frontend:
```sh
npm run dev
```

### 4. Open in Browser
Visit [http://localhost:5173](http://localhost:5173)

## Usage
- Register or log in.
- Enter a text prompt and generate images.
- Purchase credits when you run out.

## Folder Structure
```
Imagify/
  client/    # React frontend
  server/    # Node.js backend
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

---
## Live link 
https://imagify-frontend-57j7.onrender.com/
**Made with ❤️ for creativity!** 
