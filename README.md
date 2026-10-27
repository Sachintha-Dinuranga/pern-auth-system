
# Full-Stack Authentication System

A modern full-stack authentication system built with Node.js, Express, PostgreSQL, React, and Tailwind CSS. Features secure JWT-based authentication with bcrypt password hashing, protected routes, and a clean, responsive UI.

## Demo

<img width="1528" height="577" alt="image" src="https://github.com/user-attachments/assets/8ce2be44-ff8f-4312-8ba7-19e8abf21bd8" />
<img width="1517" height="550" alt="image" src="https://github.com/user-attachments/assets/630a080d-340c-47e3-99d0-3a328f622a7a" />
<img width="1537" height="572" alt="image" src="https://github.com/user-attachments/assets/a59a30c4-40a7-4469-ae43-38cb6622b00a" />


## Features

- Secure Authentication — JWT stored in httpOnly cookies (XSS-safe)

- Password Hashing — bcrypt with salt rounds

- User Registration — with validation and duplicate email checks

- Login / Logout — persistent sessions via JWT cookies

- Protected Home Page — only accessible to authenticated users

- CSRF Protection — sameSite: strict cookies

- Responsive UI — built with Tailwind CSS

- Fast Dev Experience — Vite for frontend, nodemon for backend


## Tech Stack

### Backend
- Node.js - Runtime environment
- Express.js - Web framework
- PostgreSQL - Relational database
- jsonwebtoken - JWT generation & verification
- bcrypt - Password hashing
### Frontend
- React - Runtime environment
- Tailwind CSS - Web framework
- axios/fetch - HTTP Requets



## Installation

Install my-project with npm

```bash
    git clone https://github.com/Sachintha-Dinuranga/pern-auth-system.git
```
Start backend

```bash
    cd backend
    npm install
```

Setup environment variables

```bash
    nDATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/PERN_AUTH?schema=public"
    PORT=5000
```

Create the database

```bash
    createdb PERN_AUTH
```
Start the backend server

```bash
    npm run dev
```    

Start the frontend

```bash
   cd frontend
   npm install
```

Start the development server

```bash
    npm run dev
```    
## Project structure

```text
auth-system/
│
├── backend/
│   ├── node_modules/          (hidden/ignored)
│   ├── src/
│   │   ├── config/
│   │   │   └── db.ts
│   │   ├── controllers/
│   │   │   └── authController.ts
│   │   ├── middleware/
│   │   │   └── authMiddleware.ts
│   │   ├── routes/
│   │   │   └── auth.ts
│   │   ├── utils/
│   │   └── index.ts
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── node_modules/          (hidden/ignored)
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   └── Notfound.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   └── Register.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    └── README.md
```
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@SachinthaDinuranga](https://github.com/Sachintha-Dinuranga)

