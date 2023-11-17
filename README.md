# JobTrackr-backend

This is the backend for the [JobTrackr](https://github.com/ggrewal99/JobTrackr) application. It provides the necessary API endpoints for user authentication and job tracking. The server is hosted on [render](https://render.com/).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Middleware](#middleware)
- [Error Handling](#error-handling)


## Features

- User authentication with JWT tokens.
- API endpoints for job tracking.
- MongoDB database integration.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Other dependencies (see `package.json`)

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB database (local or cloud) and its connection URI

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ggrewal99/JobTrackr-backend.git

2. Install dependencies:

   ```bash
   cd JobTrackr-backend
   npm install
   
3. Create a .env file in the project root and add the following:

   ```bash
   MONGO_URI=your-mongo-db-connection-uri

### Running the server
To start the server, run the following command in your terminal:
   ```bash
   npm start
  ```
## API Endpoints

### Authentication

- **Register User**
  - `POST /api/v1/auth/register`: Register a new user.

- **Login User**
  - `POST /api/v1/auth/login`: Log in an existing user.

### Jobs

- **Get All Jobs**
  - `GET /api/v1/jobs`: Retrieve all jobs for the authenticated user.

- **Get Specific Job**
  - `GET /api/v1/jobs/:id`: Retrieve details for a specific job.

- **Add New Job**
  - `POST /api/v1/jobs`: Add a new job.

- **Update Job**
  - `PATCH /api/v1/jobs/:id`: Update details for a specific job.

- **Delete Job**
  - `DELETE /api/v1/jobs/:id`: Delete a specific job.

## Middleware

- `authentication`: Middleware for authenticating users using JWT.

## Error Handling

- `not-found`: Handles requests to undefined routes.
- `error-handler`: Centralized error handling middleware.
