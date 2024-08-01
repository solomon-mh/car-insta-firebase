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

## Installation

### Clone the Repository

```sh
git clone https://github.com/your-username/car-insta.git
cd car-insta
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-branch
   ```
3. Make your changes.
4. Commit your changes:
   ```sh
   git commit -m 'Add new feature'
   ```
5. Push to the branch:
   ```sh
   git push origin feature-branch
   ```
6. Open a pull request.

---

Happy Coding! 🚗💨

---
