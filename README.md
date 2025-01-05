# Personal Dashboard

## Description
Personal Dashboard is a React-based project that acts as a customizable and user-friendly hub for your daily tasks, utilities, and inspirations. This application includes widgets like Notes, Weather, Calendar, and Quotes to enhance your productivity and keep you motivated.

## Features
- **User Authentication**: Secure login and signup functionality using JWT.
- **Notes Widget**: Create, edit, and delete notes seamlessly.
- **Weather Widget**: Get current weather updates for any location.
- **Calendar Widget**: Keep track of important dates and events.
- **Quote Widget**: Displays a motivational quote fetched from the [Advise Slip API](https://api.adviceslip.com/).

## Tech Stack
- **Frontend**: ReactJS, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose)

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB set up (either locally or using MongoDB Atlas)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd personal-dashboard
2. Install the dependencies:
    ```bash
    npm install
3. Install dependencies for backend:
    ```bash
    cd backend
    npm install
4. Create .env file in backend/ directory:
    ```bash
    touch .env
5. Add the following variables in .env file:
    ```env
    PORT=5000
    MONGO_URI=<your-mongodb-uri>
    JWT_SECRET=<your-secret-key>
6. Start backend server:
    ```bash
    node server.js
7. Start frontend development server:
    ```bash
    cd ..
    npm run dev
    