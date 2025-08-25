# GameWhiz

Modern, responsive game reviews and watchlist platform.

![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=06141B)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwindcss&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Auth-orange?logo=firebase&logoColor=white)
![Status](https://img.shields.io/badge/Deploy-Firebase%20Hosting-success)

---

### Table of Contents
- [Live](#live)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Environment](#environment)
- [Getting Started](#getting-started)
- [Routing & Data Loading](#routing--data-loading)
- [Firebase Hosting](#firebase-hosting)
- [Scripts](#scripts)
- [Contributing](#contributing)

---

## Live
- App: `https://gamewhiz-54611.web.app/`
- API: `https://game-whiz-server-side.vercel.app/`

---

## Features
- **Authentication**: Email/password and Google OAuth via Firebase Auth
- **Reviews**: Create, read, update, and delete your own reviews
- **Watchlist**: Maintain a personal game watchlist
- **Content-rich Home**: Hero banner, highest-rated reviews, latest news, videos, and upcoming games
- **Theming**: Light/Dark theme with persisted preference
- **Responsive**: Optimized for mobile, tablet, and desktop

---

## Tech Stack
- **Frontend**: React 18, React Router 7, Tailwind CSS, DaisyUI
- **UX Utilities**: React Hot Toast, React Icons, Lottie, Animate.css
- **Auth**: Firebase Authentication
- **Build**: Vite 6
- **Backend**: Express + MongoDB (separate repository)

---

## Architecture
```text
src/
  Components/
    Banner.jsx
    HighestRatedReviews.jsx
    LatestNews.jsx
    UpcomingGame.jsx
    Video.jsx
    Navbar.jsx
    MainLayout/Mainlayout.jsx
    Pages/
      Home.jsx
      Login.jsx
      Register.jsx
      AllReviews.jsx
      AddReview.jsx
      MyReviews.jsx
      GameWatchlist.jsx
      ReviewDetails.jsx
      UpdateReview.jsx
      ForgetPassword.jsx
      ErrorPage.jsx
  Firebase/Firebase.init.js      # Firebase app + auth
  Provider/AuthProvider.jsx      # Auth context/state
  Routes/Routes.jsx              # Routes + data loaders
  ThemeContext/ThemeContext.jsx  # Theme context (light/dark)
```

---

## Prerequisites
- Node.js ≥ 18
- npm ≥ 9
- Firebase CLI: `npm i -g firebase-tools`

---

## Environment
Create a `.env` file in the project root with your Firebase credentials:
```bash
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
```

> The client consumes a separate REST API (see Live → API).

---

## Getting Started
```bash
# 1) Install dependencies
npm install

# 2) Run locally (dev server)
npm run dev

# 3) Build for production (outputs to dist/)
npm run build

# 4) Preview the production build
npm run preview
```

---

## Routing & Data Loading
Defined in `src/Routes/Routes.jsx`. Loaders fetch from the server API.
- `/` → highest-rated reviews: `GET /highest-rated-reviews`
- `/allreviews` → all reviews: `GET /reviews`
- `/reviews/:id` → review details: `GET /reviews/:id`
- `/addreview` → protected (auth required)
- `/updatereview/:id` → edit a review with loader
- `/myreviews/:email` → protected, user reviews
- `/gamewatchlist/:email` → protected, user watchlist
- `/login`, `/register`, `/forgetpassword` → authentication flows

Protected routes use `PrivateRoute` powered by `AuthProvider` (Firebase Auth).

---

## Firebase Hosting
The app deploys the Vite production build from `dist/`.

`firebase.json` (essentials):
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

Deploy:
```bash
# build
npm run build

# deploy to the selected project
firebase deploy --only hosting

# set/select project if needed
firebase use <your-project-id>
```

---

## Scripts
- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint

---

## Contributing
Pull requests are welcome. For substantial changes, please open an issue to discuss the proposal before submitting a PR.

---
