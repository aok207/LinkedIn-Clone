# LinkedIn Clone Project

## Overview

This project is a LinkedIn clone created using React, Redux, and Firebase. It replicates the familiar LinkedIn interface, allowing users to log in and post updates. All user data and posts are stored in firebase.

Check out the deployed project: [LinkedIn Clone](https://linkedin-clone-7e4a3.web.app/)

## Features

- **Authentication**: Users can log in securely using Firebase authentication.
  
- **Post Updates**: Users can post updates and share content with their network.

- **Real-time Updates**: The application utilizes Firebase's real-time database capabilities, providing users with instant updates on posts and activities.

- **Responsive Design**: The user interface is designed to be responsive, ensuring a seamless experience across various devices.

## Technologies Used

- **React**: The project is built using React, a popular JavaScript library for building user interfaces.

- **Redux**: Redux is used for state management, providing a centralized store for the application's data.

- **Firebase**: Firebase is the backend infrastructure for this project, handling authentication, database (Firestore), and hosting.

## Setup

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/aok207/linkedin-clone.git
   ```

2. Install dependencies:

   ```bash
   cd linkedin-clone
   npm install
   ```

3. Set up Firebase:

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Obtain your Firebase configuration and replace the placeholder in `src/firebase.js` with your configuration.

4. Run the application:

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000/` by default.

## Deployment

To deploy the project, you can use the Firebase hosting capabilities:

1. Install Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. Login to your Firebase account:

   ```bash
   firebase login
   ```

3. Initialize Firebase hosting:

   ```bash
   firebase init hosting
   ```

   Follow the prompts to set up your project for hosting.

4. Deploy the application:

   ```bash
   firebase deploy
   ```

   The deployed application will be accessible at the provided hosting URL.
