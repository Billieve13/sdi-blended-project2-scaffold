Data Annotation Project

## Example Video

[readme-video02.webm](https://github.com/cwilliams001/sdi-blended-project2-scaffold/assets/82992893/b461f059-734d-4acf-824b-5a734e6f7e4e)

## Purpose
The purpose of this application is to enable users to label data for mission-critical tasks.

## Kanban Board
Our Kanban Board can be found here. https://trello.com/invite/b/2G0ipzll/ATTI8ac71bc6aedae65ebf5a1225132f88596E2CCFA4/project-two

## Wireframe/User Story drafts
Our Wireframe and user story drafts can be found here. https://miro.com/welcomeonboard/RlptN2NsVGl6NERTZm1XRmJUNWhrMEQyQ0pVeWFURzVKMVRkQXREREFkOFF6SzNRYnRjVUUxckZFRklCaDFJb3wzNDU4NzY0NTcxODU1MjgyNzE3fDI=?share_link_id=723961214950
![Wireframe](https://github.com/cwilliams001/sdi-blended-project2-scaffold/assets/59510205/2ec0eb8a-4e3f-43db-837f-2fb102f13033)

## Overview
This project integrates Label Studio into a React application for annotation purposes. It allows users to annotate images using Label Studio and then sends these annotations to a Node.js backend server. The server stores the annotations and provides an endpoint to view all received annotations.

## Prerequisites
- Node.js
- npm (Node Package Manager)
- React.js

## Installation

### Frontend
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the frontend directory:**
   ```bash
   cd sdi-blended-project2-scaffold
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   - Create a `.env` file in the root of the frontend directory.
   - Add your Google API Key for map snapshots:
     ```env
     REACT_APP_GOOGLE_API_KEY=your_google_api_key
     ```

### Backend
1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Application

### Start the Backend Server
1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Start the server:**
   ```bash
   node server.js
   ```

### Start the Frontend Application
1. **Open a new terminal window/tab.**
2. **Navigate to the frontend directory:**
   ```bash
   cd sdi-blended-project2-scaffold
   ```

3. **Start the React application:**
   ```bash
   npm start
   ```

### Usage
- Open your web browser and navigate to `http://localhost:3000`.
- Use the Label Studio interface to annotate images.
- Submit your annotations, which will be sent to the backend server.
- To view received annotations, navigate to `http://localhost:3001/annotations` in your browser.