# Gamewhiz

## Description Of The Project

**GameWhiz** is a feature-rich game review platform where users can explore top-rated games, share their thoughts through reviews, and manage their game watchlist. This platform allows authenticated users to add, update, and delete reviews for their favorite games while also keeping track of their personal game watchlist. The application offers a smooth, responsive experience with a dark and light theme toggle and robust authentication features powered by Firebase.

---

## Live Demo
[Visit the Live Website](https://gamewhiz-54611.web.app/) 


---
## Server Side Code
[Gamewhiz Server-Side](https://github.com/IftekarRahmanRuhit/GameWhiz-Server-Side) 


---


## Key Features
- **User Authentication**: Secure login and registration system using Firebase Authentication.
- **Review Management**: Authenticated users can add, update, and delete their game reviews.
- **Game Watchlist**: Users can add games to their personalized watchlist.
- **Dark/Light Theme Toggle**: Seamless switch between dark and light modes.
- **Highest Rated Games**: Users can see top-rated games on the homepage.
- **Responsive Design**: Fully optimized for all devices.
- **Smooth Animations**: Enhanced user experience with animations using `Animation.css` and Lottie.

---

## Technologies Used
### Frontend:
- **React.js**: Core library for building user interfaces.
- **React Router**: For routing between pages.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **DaisyUI**: Tailwind CSS components for enhanced UI.
- **React Icons**: For scalable vector icons.
- **Animation.css**: Library for smooth animations.
- **React Hot Toast**: For interactive toast notifications.
- **React Typewriter**: For typewriter animations on the homepage.
- **Lottie React**: For adding animations with Lottie files.

### Backend/Authentication:
- **Firebase**: For user authentication (sign-up, log-in, password reset).
- **MongoDB**: For storing user reviews and game data.
- **Express.js**: Backend server to handle API requests and manage data.

---

## Dependencies
```json
{
  "dependencies": {
"@eslint/js": "^9.15.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "daisyui": "^4.12.14",
    "eslint": "^9.15.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^6.0.1",
    "animate.css": "^4.1.1",
    "firebase": "^11.0.2",
    "localforage": "^1.10.0",
    "lottie-react": "^2.4.0",
    "match-sorter": "^8.0.0",
    "react": "^18.3.1",
    "react-awesome-slider": "^4.1.0",
    "react-dom": "^18.3.1",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.0.2",
    "react-simple-typewriter": "^5.0.1",
    "react-tooltip": "^5.28.0",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.14.5"
  }
}
```
## Installation Guide

Follow these steps to set up the project locally:

### 1. Clone the Repository
```sh
git clone https://github.com/IftekarRahmanRuhit/GameWhiz-client-side.git

```
### 2. Navigate into the project folder
```sh
cd your-repository
```
### 3. Install Dependencies
```sh
npm install
```
### 4. Set Up Environment Variables
```sh
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
```
### 5. Run the Application
```sh
npm run dev
```