# TechStack Conference Website

## Project Overview
This project is a modern web application for the "TechStack Conference," built using React, TypeScript, and Vite. It serves as the information hub for the event, featuring a session catalog, schedule, registration, and attendee information.

## Tech Stack
- **Framework:** React 19
- **Routing:** React Router DOM 7
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4, Lucide React (icons)
- **Animation:** Framer Motion
- **Testing:** Vitest, React Testing Library
- **Linting:** ESLint

## Building and Running

### Prerequisites
- Node.js (Latest LTS recommended)
- npm

### Key Commands
- **Start Development Server:**
  ```bash
  npm run dev
  ```
  Runs the app in development mode with HMR (Hot Module Replacement).

- **Build for Production:**
  ```bash
  npm run build
  ```
  Compiles TypeScript and builds the application for production deployment.

- **Run Tests:**
  ```bash
  npm run test
  ```
  Executes the test suite using Vitest.

- **Preflight Check:**
  ```bash
  npm run preflight
  ```
  Runs linting, tests (once), and a production build. Use this before pushing changes.

- **Lint Code:**
  ```bash
  npm run lint
  ```

## Architecture & Conventions

### Directory Structure
- **`src/pages/`**: Contains top-level page components (e.g., `Home.tsx`, `Catalog.tsx`, `Registration.tsx`) corresponding to application routes.
- **`src/components/`**: Reusable UI components (e.g., `Layout.tsx`, `Loading.tsx`).
- **`src/data/`**: Static data definitions and types (e.g., `sessions.ts` for conference session data).
- **`src/App.tsx`**: Main application entry point handling routing and lazy loading of pages.
- **`src/lazyLoad.ts`**: Centralized logic for lazy loading page components to optimize performance.

### Development Conventions
- **Routing:** Uses `react-router-dom` with a `Layout` component wrapping all routes. Pages are lazy-loaded to improve initial load time.
- **Styling:** extensive use of Tailwind CSS utility classes. Avoid inline styles where possible.
- **State Management:** Local state with React Hooks (`useState`, `useEffect`).
- **Testing:** Unit and integration tests are located alongside their respective components (e.g., `Home.test.tsx` next to `Home.tsx`).
- **Types:** Strict TypeScript usage. Interfaces for data models (like `Session`) are defined in `src/data/`.
