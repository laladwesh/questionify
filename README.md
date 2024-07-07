# Questionify

Questionify is a web application where users can sign up, sign in, post questions, view other users' questions, and comment on them. The application is built using Node.js, Express.js, and MongoDB, with EJS as the templating engine and JWT for authentication.

## Features

- User registration and authentication using JWT
- Secure login and logout functionality
- Ability to post questions
- View all questions posted by users
- Comment on questions

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript templates)
- JWT (JSON Web Tokens)
- Multer (for file uploads)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/questionify.git
    ```

2. Navigate to the project directory:
    ```bash
    cd questionify
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables:
    Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Start the server:
    ```bash
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000`.

## Routes

### Authentication

- `POST /signup` - Register a new user
- `POST /signin` - Sign in an existing user
- `GET /logout` - Log out the current user

### Questions

- `GET /questions` - View all questions
- `POST /questions` - Post a new question (authenticated users only)
- `GET /questions/:id` - View a specific question
- `POST /questions/:id/comments` - Comment on a specific question (authenticated users only)

## Folder Structure
