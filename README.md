# React Login and Registration System

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Project Setup](#project-setup)
  - [API Configuration](#api-configuration)
  - [Axios Configuration](#axios-configuration)
  - [Dependencies](#dependencies)
  - [DevDependencies](#devDependencies)
- [Pages](#pages)
  - [Registration Page](#registration-page)
  - [Login Page](#login-page)
  - [Profile Page](#profile-page)
  - [Logout Functionality](#logout-functionality)
- [Custom Hooks](#custom-hooks)
  - [useUser Hook](#useuser-hook)
- [Styling](#styling)
  - [Tailwind CSS](#tailwind-css)
  - [Material-UI](#material-ui)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Create React App Information](#create-react-app-information)
  - [Available Scripts](#available-scripts)
  - [Learn More](#learn-more)

## Overview

This project is a simple yet powerful login and registration system built with React. It demonstrates the use of React, Tailwind CSS, Material-UI, and Axios for building a responsive and secure authentication system. The project includes features like protected routes, token-based authentication, and a custom hook for managing user state.

## Features

- User registration and login
- Protected routes based on authentication
- Token-based authentication stored in cookies
- Custom hook (`useUser`) for managing user state
- Styled with Tailwind CSS and Material-UI
- Responsive design
- Logout functionality

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   Install dependencies:
   ```

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## Project Setup

### API Configuration

The application interacts with a backend API using the following endpoints:

- **Registration:** `/auth/register`
- **Login:** `/auth/login`
- **Logout:** `/auth/logout`

### Axios Configuration

Axios is configured with a base URL in `axiosConfig.js`:

### Dependencies

The project uses the following dependencies:

- **`@emotion/react`**: ^11.13.0
- **`@emotion/styled`**: ^11.13.0
- **`@mui/icons-material`**: ^5.16.6
- **`@mui/material`**: ^5.16.6
- **`@testing-library/jest-dom`**: ^5.17.0
- **`@testing-library/react`**: ^13.4.0
- **`@testing-library/user-event`**: ^13.5.0
- **`axios`**: ^1.7.3
- **`js-cookie`**: ^3.0.5
- **`react`**: ^18.3.1
- **`react-dom`**: ^18.3.1
- **`react-hook-form`**: ^7.52.2
- **`react-hot-toast`**: ^2.4.1
- **`react-router-dom`**: ^6.26.0
- **`react-scripts`**: 5.0.1
- **`web-vitals`**: ^2.1.4

### DevDependencies

The project uses the following development dependencies:

- **`tailwindcss`**: ^3.4.8

## Pages

### Registration Page

- Implements a registration form using Material-UI and React Hook Form.
- The form sends a POST request to `/auth/register` with the following fields:
  - `first_name`
  - `last_name`
  - `phone`
  - `email`
  - `username`
  - `password`
  - `password_confirmation`
- The form includes validation and displays success or error messages based on the API response.

### Login Page

- Implements a login form using Material-UI and React Hook Form.
- The form sends a POST request to `/auth/login` with `username` and `password`.
- On successful login, the authentication token is stored in cookies, and the user is redirected to a protected profile page.

### Profile Page

- Displays a welcome message and user-specific information using data stored in the custom `useUser` hook.
- Includes a styled card with user details (username, email, phone number).
- A logout button is provided to allow users to log out.

### Logout Functionality

- The logout button triggers a POST request to `/auth/logout`.
- The authentication token is sent in the header for validation.
- The token is removed from cookies, and the user state is cleared upon logout.

## Custom Hooks

- Custom hooks are used to manage complex state and logic, enhancing code reusability and organization. In this project, the `useUser` hook is implemented to manage user state.

## Styling

### Tailwind CSS

- Tailwind CSS is used for styling across the application, providing utility-first CSS classes.
- The card on the profile page is styled with Tailwind CSS to achieve a modern and responsive design.

### Material-UI

- Material-UI components are used for building forms, buttons, cards, and other UI elements.
- Icons from Material-UI are used to enhance the visual representation of user details on the profile page.

## Usage

- **Registration:** Fill out the registration form and submit to create a new user account.
- **Login:** Use the login form to authenticate. Upon successful login, you will be redirected to your profile page.
- **Profile Page:** View your profile details. You can log out by clicking the "Logout" button.
- **Logout:** Click the "Logout" button on the profile page to end your session.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## Create React App Information

This section includes details about the standard features and scripts provided by Create React App.

### Available Scripts

In the project directory, you can run:

- **`npm start`**  
  Runs the app in the development mode.  
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  The page will reload when you make changes.  
  You may also see any lint errors in the console.

- **`npm test`**  
  Launches the test runner in the interactive watch mode.  
  See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- **`npm run build`**  
  Builds the app for production to the `build` folder.  
  It correctly bundles React in production mode and optimizes the build for the best performance.

  The build is minified and the filenames include the hashes.  
  Your app is ready to be deployed!

  See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- **`npm run eject`**  
  **Note:** this is a one-way operation. Once you `eject`, you can't go back!

  If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

  Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

  You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

- **Code Splitting**  
  This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

- **Analyzing the Bundle Size**  
  This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

- **Making a Progressive Web App**  
  This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

- **Advanced Configuration**  
  This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

- **Deployment**  
  This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

- **`npm run build` fails to minify**  
  This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
