# Car-Insta

## Overview

**Car-Insta** is an Instagram clone focused exclusively on cars. This project leverages the power of modern web technologies to provide a seamless and responsive user experience for car enthusiasts.

## Features

- **User Authentication**: Secure user login and registration using Firebase Authentication.
- **File Storage and Database**: Secure Data and file Storage using Firebase Storage and Firebase Cloud.
- **Responsive Design**: A fully responsive design using Tailwind CSS.
- **Real-time Updates**: Real-time data fetching and state management using `@tanstack/react-query`.
- **Form Handling**: Efficient form handling with `react-hook-form` and data validation with `zod`.
- **Animations**: Lively animations integrated with `lottie-react`.

## Tech Stack

- **Frontend**: React, Tailwind CSS, Shadcn, react-hook-form, Zod, Lottie-react
- **Backend**: Firebase
- **State Management**: `@tanstack/react-query`

## Project Structure

```plaintext
Car-Insta/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── _auth/
│   │   └── auth.js
│   │   └── forms
│   ├── _root/
│   ├── assets/
│   ├── constants/
│   ├── constants/
│   ├── lib/
│   ├── types/
│   ├── components/
│   │   ├── AuthProvider.tsx
│   │   ├── PostCard.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Profile.tsx
│   │   └── ...
│   ├── hooks/
│   │   └── useAuth.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .gitignore
├── README.md
├── package.json
└── ...
```

Installation
Clone the Repository

sh
Copy code
git clone https://github.com/your-username/car-insta.git
cd car-insta
Install Dependencies

sh
Copy code
npm install
Set Up Firebase

Go to Firebase Console, create a new project.
Set up authentication (Email/Password).
Obtain Firebase configuration and set it in your environment variables.
Start the Development Server

sh
Copy code
npm start
Usage
Sign Up/Login: Users can sign up or log in using email and password.
Create Posts: Upload car images, add captions, tags, and other details.
View Posts: Browse through the feed to view car posts from different users.
Profile Management: Users can view and manage their profile and posts.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
React: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Firebase: Backend-as-a-Service by Google.
Shadcn: A lightweight component library.
react-hook-form: Performant, flexible and extensible forms with easy-to-use validation.
Zod: TypeScript-first schema declaration and validation library.
Lottie-react: Lottie animations in React applications.
@tanstack/react-query: Powerful asynchronous state management for React.
Contact
For any inquiries, please contact [your-email@example.com].

Happy Coding! 🚗💨
