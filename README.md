# Imagify

Imagify is a full-stack AI-powered web application that enables users to generate high-quality images from text prompts. The platform integrates AI image generation, secure authentication, credit-based access, and online payments to provide a seamless creative experience.

Users can register, log in, generate AI-powered images, manage credits, and purchase additional credits through Razorpay.

## Features

* AI-powered image generation from text prompts
* Secure user authentication and authorization
* Credit-based image generation system
* Razorpay payment gateway integration for credit purchases
* Responsive and modern user interface
* User profile management with credit balance tracking
* Real-time notifications for enhanced user experience

## Tech Stack

### Frontend

* React.js
* Vite
* Context API
* Axios
* Framer Motion
* React Toastify

### Backend

* Node.js
* Express.js
* MongoDB
* JSON Web Token (JWT)
* Razorpay API

### AI Integration

* ClipDrop API (Text-to-Image Generation)

## Live Demo

Deployed Application:
https://imagify-frontend-57j7.onrender.com/

## Project Structure

```plaintext
Imagify/
│── client/      # React frontend
│── server/      # Node.js backend
```

## Getting Started

### Prerequisites

Ensure the following are installed on your system:

* Node.js
* npm or yarn
* MongoDB (local installation or cloud database)
* Razorpay account for payment integration
* ClipDrop API key (or an alternative AI image generation API)

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/Imagify.git
cd Imagify
```

### 2. Backend Setup

Navigate to the server directory:

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` directory and configure the following environment variables:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIPDROP_API=your_clipdrop_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Start the backend server:

```bash
npm start
```

### 3. Frontend Setup

Navigate to the client directory:

```bash
cd ../client
npm install
```

Create a `.env` file inside the `client/` directory:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the frontend development server:

```bash
npm run dev
```

### 4. Access the Application

Open the application in your browser:

```plaintext
http://localhost:5173
```

## Usage

1. Register a new account or log in.
2. Enter a text prompt to generate AI-based images.
3. Use available credits to create images.
4. Purchase additional credits through Razorpay when required.

## API and Services Used

* **ClipDrop API** for AI image generation
* **Razorpay** for secure payment processing
* **MongoDB** for database management
* **JWT Authentication** for secure user sessions

## Contributing

Contributions are welcome. If you would like to improve the project, please fork the repository and submit a pull request.

For major changes or feature requests, please open an issue to discuss the proposed modifications.

## License

This project is licensed under the MIT License.

---

Developed to simplify AI-powered image generation and provide an accessible creative platform.
