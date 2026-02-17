# Project 6: Multi-Tier Web Application

A full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js).
This project features a React frontend, Node.js backend, and MongoDB database, containerized with Docker.

## Technology Stack

- Frontend: React (Vite)
- Backend: Node.js, Express
- Database: MongoDB
- DevOps: Docker, Docker Compose, GitHub Actions

## Prerequisites

- Node.js (v18 or higher recommended)
- Docker Desktop (optional, for containerized run)
- Git

## Installation and Setup

### Option 1: Using Docker (Recommended)

1. Ensure Docker Desktop is running.
2. Open a terminal in the project root.
3. Run the following command:
   
   docker-compose up -d --build

4. The application will be available at:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

### Option 2: Manual Installation (Local)

If you do not wish to use Docker, follow these steps.

#### Backend Setup

1. Navigate to the server directory:
   cd server
2. Install dependencies:
   npm install
3. Start the server:
   npm start

#### Frontend Setup

1. Open a new terminal and navigate to the client directory:
   cd client
2. Install dependencies:
   npm install
3. Start the development server:
   npm run dev -- --host

## Project Structure

- /client: React frontend application
- /server: Node.js/Express backend API
- docker-compose.yml: Docker orchestration configuration
- .github/workflows: CI/CD pipeline definitions

## API Endpoints

- GET /: Returns a welcome message.
- GET /api/health: Returns system status.

## Troubleshooting

- If MongoDB is not running locally, the backend may show connection errors but will still serve API requests.
- Ensure ports 5000 and 5173 are not in use by other applications.
