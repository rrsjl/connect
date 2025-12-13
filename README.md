# Taglay ng Alumni: From Mind to Machine

Event site for the From Mind to Machine alumni mentorship series. The app pairs a React + Vite front end with an Express + MongoDB API for user management and article-driven content.

## What's inside
- `client/` React single-page app (home, about, articles, detail, 404).
- `server/` Express API for users and articles with JWT-based login.
- `client/public/images/` Event poster and mentor portraits referenced by the UI.

## Requirements
- Node 18+ and npm
- MongoDB instance (local or Atlas)

## Environment variables
- `server/.env`
  - `MONGO_URI=<your Mongo connection string>`
  - `JWT_SECRET=<token signing secret>`
  - `PORT=8000` (optional)
- `client/.env`
  - `VITE_LOCAL_HOST=http://localhost:8000` (or your deployed API URL)

## Local setup
1) Backend (API)
- `cd server && npm install`
- Start dev server: `npm run dev` (or `npm start` for plain node)
- API surface:
  - `GET/POST /api/users`, `PUT/DELETE /api/users/:id`
  - `POST /api/users/login` (returns JWT, enforces active users)
  - `GET /api/articles`, `GET /api/articles/:name`
  - `POST /api/articles`, `PUT /api/articles/:id`, `PATCH /api/articles/:id/toggle`

2) Frontend (Vite)
- `cd client && npm install`
- Run locally: `npm run dev` (use printed local URL)
- Build: `npm run build`
- Preview built assets: `npm run preview`

## Customizing content
- Hero/about copy: `client/src/pages/HomePage.jsx` and `client/src/pages/AboutPage.jsx`.
- Articles: `client/src/article-content.js` (titles, slugs, and body copy).
- Styling tokens: `client/src/index.css` for colors/typography; component styles live in `client/src/styles/`.
- Images: drop new assets in `client/public/` and update `<img src="/your-file-name.ext" />` references.

## Deployment notes
- Frontend: build from `client/` and deploy the `dist` output (Netlify/Vercel/static hosting).
- Backend: run `server/` on your host with the `.env` values configured; ensure `VITE_LOCAL_HOST` points at the deployed API.
