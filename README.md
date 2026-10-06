# Instagram Clone 
A full-stack Instagram clone built with React, Express, and MongoDB — featuring real 
authentication, posts with image uploads, likes, comments, a follow system, and editable 
user profiles. 

## Features
- **Authentication** — register/login with hashed passwords (bcrypt) and session-based auth - **Posts** — create posts with image upload, caption, and location; like, repost, and share 
with live counters
- **Comments** — add and delete comments on a dedicated comments page
- **Profile** — view and edit profile (name, username, bio, website, profile picture)
- **Follow system** — follow/unfollow real users, see follower/following counts, view your following list
- **Suggestions** — "Suggested for you" sidebar pulling real registered users from MongoDB
- **Delete posts/comments** — owner-only deletion with a dropdown menu

## Tech Stack 
- **Frontend:** React, Vite, React Router, Axios, Bootstrap
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Auth:** express-session, bcrypt
- **File uploads:** Multer
- 
## Note on Stories 
The Stories feature uses static mock data (json-server) for demo purposes. Everything else 
— posts, auth, profiles, comments, and the follow system — is fully backed by MongoDB. 

## Setup 
1. Clone the repo 
2. Install dependencies in both folders: 
cd backend && npm install 
cd .. && npm install 
3. Create a `.env` file in `backend/`: 
MONGO_URI=mongodb://localhost:27017/instagram-clone 
SESSION_SECRET=your_secret_here 
4. Create a `.env` file in the root: 
VITE_API_URL=http://localhost:3000 
5. (Optional) Seed test accounts: `node backend/seed.js`
6. Run the backend: `node backend/server.js` 
7. Run the frontend: `npm run dev` 
7. Run the backend: `node backend/server.js` 
8. Run the frontend: `npm run dev`
