# User Address Management System

## Overview

This project demonstrates a robust backend system built with Node.js and TypeScript, showcasing proficiency in modern web development practices. It features a RESTful API for user registration and address management, utilizing PostgreSQL for data persistence and Express.js for routing.

[Watch Demo Video](https://drive.google.com/file/d/1MxHPIP15rDMSbXLBWeQ8k3TKVmVqVbic/view?usp=sharing)

## Key Features

- **User Registration**: Seamless API endpoint for user creation with associated addresses.
- **Relational Data Model**: Implements a one-to-many relationship between users and addresses.
- **PostgreSQL Integration**: Utilizes a powerful relational database for data integrity and complex queries.
- **TypeScript Implementation**: Enhances code quality and developer experience with static typing.
- **Environment Configuration**: Uses dotenv for secure and flexible environment variable management.
- **Error Handling**: Implements try-catch blocks and database transactions for robust error management.
- **RESTful API Design**: Follows REST principles for scalable and maintainable API architecture.
- **Modular Structure**: Organizes code into models, routes, and server logic for improved maintainability.

## Technologies Used

- Node.js
- TypeScript
- Express.js
- PostgreSQL
- pg (node-postgres)
- dotenv

## Setup and Installation

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository**

- git clone `<repository-url>`
- cd user-address-backend


2. **Install dependencies**
- npm install


3. **Set up PostgreSQL**
- Install PostgreSQL if not already installed.
- Create a new database for the project.

4. **Configure environment variables**
- Create a `.env` file in the root directory.
- Add the following variables:
-- DATABASE_URL=postgresql://`<username>`:`<password>`@localhost:5432/`<database_name>`
-- PORT=3000

- Replace `<username>`, `<password>`, and `<database_name>` with your PostgreSQL credentials.

5. **Compile TypeScript**
- npm run build

6. **Run the server**
- For development:
-- npm run dev
- For production:
-- npm start


7. **Access the application**
- Open a web browser and navigate to `http://localhost:3000`
- You should see a user registration form.

## API Endpoints

- **POST /api/register**
- Registers a new user with an associated address.
- Request body should include `name` and `address`.

## Database Schema

- **users**
- id: SERIAL PRIMARY KEY
- name: VARCHAR(255) NOT NULL

- **addresses**
- id: SERIAL PRIMARY KEY
- user_id: INTEGER REFERENCES users(id)
- address: TEXT NOT NULL

## Future Enhancements

- Implement user authentication and authorization.
- Add endpoints for updating and deleting user information.
- Implement input validation and sanitization.
- Add unit and integration tests.
- Implement logging for better debugging and monitoring.
