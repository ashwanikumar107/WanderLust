# 🌍 WanderLust Travel Listing Web Application

A full-stack travel booking web application built with classic backend and frontend technologies to list and manage travel stays, explore property listings, and handle basic user interactions (no official README was provided).
---
## ✨ Project Overview

An interactive travel platform where users can view, add, and manage travel property listings — similar in concept to marketplace apps for stays and rentals. The codebase includes backend routes, database models, static assets, views, and middleware.
---
## 🚀 Key Features

### 🧑‍💻 Property Listings

- Add and view listings for travel stays (houses, villas, cabins)
- Users can browse through various accommodations
- Listing pages show details like description, location, price
---
### 📌 Routes & Backend Logic

- Organized route handlers for listings and interactions
- Middleware for request handling and validations
- Structured using models and controllers
  
## 📁 MVC Pattern

- models/ — defines data schemas
- routes/ — URL endpoints
- controllers/ & utils/ — business logic and helpers

### 🖼️ Static Assets

- public/ — likely contains CSS, images, and client-side scripts
- views/ — server-rendered HTML pages using templating (EJS)

### 🛡️ Middleware
Custom middleware for controlling access, validating forms, or processing uploads

### 🛠️ Tech Stack

- Backend: Node.js + Express
- Templating / UI: EJS + CSS + HTML
- Database: MongoDB (via Mongoose)
- Utility Libraries: Middleware, helpers, routing

### 📂 Project Structure
src/
├── controllers/
├── init/
├── models/
├── public/
├── routes/
├── utils/
├── views/
├── app.js
├── cloudConfig.js
├── schema.js
├── middleware.js
├── package.json

## ▶️ Running the Project Locally

1. Clone repository - git clone https://github.com/ashwanikumar107/WanderLust.git

2. Install dependencies - npm install

3. Set up Environment
   - Add any required environment variables (MongoDB URI, Cloudinary keys, etc.)
   - Create a .env file if needed

4. Run the server - node app.js
5. Open in browser - http://localhost:8080
