# LiftMyMind - Project Context

## 📌 Project Overview
**LiftMyMind** is a modern, visually stunning mental wellness application aimed at helping users track their mood through daily reflection and providing personalized song recommendations based on their calculated mood score. 

The application uses dynamic backgrounds, fluid animations, and a sleek user interface to create a relaxing experience for the user. It is built as a single-page application (SPA) using React and modern frontend tools.

## 🛠️ Technology Stack
- **Framework:** React 19 (compiled with Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Animations & Graphics:** 
  - Framer Motion
  - Three.js
  - React Three Fiber / Drei / Rapier
  - Vanta.js (for immersive, dynamic background effects)
- **Icons:** React Icons & Lucide React
- **Routing:** React Router DOM (v6/v7)
- **Linting:** ESLint

## 📂 Directory Structure & Architecture
The project is organized in the `src/` directory with a focus on reusability and feature-based routing:

- **`App.tsx` & `main.tsx`**: Core entry points. `App.tsx` handles the main routing setup and the global `GooeyNav` and `Footer` components.
- **`home/Page.tsx`**: The main landing page. Features a Vanta.js background, interactive spark animations (`ClickSpark`), and engaging typography ("YOUR MOOD HAS A SOUNDTRACK") encouraging users to find their song.
- **`Song-Suggestor/page.tsx`**: The core feature of the app. It walks users through a series of questions using an `ElasticSlider` to rate their satisfaction (0-100). Once the survey is complete, it calculates an average score and redirects users to a curated YouTube song:
  - **Score < 30:** Sad song
  - **Score < 60:** Neutral song
  - **Score >= 60:** Happy song
- **`About/Page.tsx`**: Contains information about the purpose and team behind LiftMyMind.
- **`whatwedo.tsx/Page.tsx`**: A component featured on the home page that details the app's services and mission.
- **`components/`**: Standardized reusable UI elements like buttons (`RippleButton`, `SlideArrowButton`), sliders, and animated backgrounds.
- **`assets/`**: Images and static files used throughout the project.

## 🔧 Setup & Local Development
Currently, your local machine needs Node.js and `npm` installed to build and run the app. Once installed, the common workflow is:

1. **Install Dependencies:** `npm install`
2. **Start Development Server:** `npm run dev` (starts on a local port with Hot Module Replacement)
3. **Build for Production:** `npm run build`

> **Note:** Attempting to run `npm install` directly on this machine yielded a "CommandNotFoundException", meaning Node.js and NPM are not currently installed or added to your system's PATH.

## 🎯 Future Enhancements (Ideas)
- Integrate a local database or localStorage to save past mood scores.
- Expand the song suggestion logic to connect with the Spotify API instead of static YouTube links.
- Add user authentication to track mental wellness trends over time.
