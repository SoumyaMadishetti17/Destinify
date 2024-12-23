# Destinify

Destinify is a personalized travel recommendation platform designed to enhance the travel planning experience by providing tailored suggestions based on user preferences. It features secure authentication, dynamic destination recommendations, and interactive tools for exploring travel options.

## Features

- **Secure Login/Signup**: User authentication with JWT and password encryption.
- **Dynamic Homepage**: Displays trending destinations and user-specific travel suggestions.
- **Search Functionality**: Enables users to find destinations quickly and efficiently.
- **User Preference Survey**: Collects user preferences to generate personalized recommendations.
- **Mobile-Friendly Design**: Fully responsive for a seamless user experience across devices.

---

## Tech Stack

### Frontend
- **React**: For building a responsive and dynamic UI.
- **Bootstrap**: For styling and layout.
- **HTML & CSS**: Core web technologies for structure and design.

### Backend
- **Node.js**: Server-side runtime for handling requests.
- **Express**: Web framework for creating RESTful APIs.
- **MongoDB**: NoSQL database for data storage and management.

### Additional Tools
- **JWT**: For secure user session management.
- **Bcrypt**: For password hashing.
- **Dotenv**: For managing environment variables.

---

## Installation

### Prerequisites
- Node.js and npm installed.
- MongoDB instance running locally or in the cloud.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/Destinify.git
Navigate to the backend directory:

cd Destinify/backend
Install dependencies:
npm install
Set up environment variables:
Create a .env file in the backend directory and add the following:
makefile
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Start the server:
npm start
Navigate to the frontend directory:

cd ../frontend
Install frontend dependencies:
npm install
Start the React application:
npm start
API Endpoints
Authentication:
POST /api/auth/signup: Registers a new user.
POST /api/auth/login: Authenticates a user and returns a token.
Preferences:
POST /api/preferences: Saves user preferences for generating recommendations.
GET /api/preferences/results: Retrieves personalized destination suggestions.
Search:
GET /api/search?q=destination: Searches for destinations matching the query.
Project Structure

Destinify/
├── frontend/         # React frontend
│   ├── public/       # Static assets
│   └── src/          # React components and logic
├── backend/          # Node.js backend
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── controllers/  # Request handlers
│   └── server.js     # Entry point for backend
└── README.md         # Project documentation

Fork the repository.
Create a new branch for your feature:

git checkout -b feature-name
Commit your changes:

git commit -m "Add feature-name"
Push to your branch:

git push origin feature-name
Open a pull request.
Contact Details:
Amiya Soni(Backend): amiyasoni5@gmail.com
