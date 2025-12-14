# 🔐 Full Stack Authentication Project

A **real-time, interview-ready full stack authentication system** with modern UI and secure backend.

---

## 🚀 Features

* User Registration
* User Login
* Profile View & Update
* JWT Authentication
* Session management using **Redis**
* Token stored in **Browser LocalStorage**
* Protected Profile API
* Responsive, premium UI

---

## 🧱 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* Redis (Session storage)
* JWT Authentication
* bcryptjs

```

---

## 🔁 Application Flow

```
Register ➜ Login ➜ Token stored in LocalStorage
        ➜ Redis session created
        ➜ Access Profile
        ➜ Update Profile Details
```

---

## 🔧 Installation & Setup

### Prerequisites

* Node.js (v18+ recommended)
* MongoDB (local or Atlas)
* Redis Server

---

## ⚙️ Backend Setup

```bash
cd backend
npm install
```

### Create `.env` file

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/auth_project
JWT_SECRET=your_secret_key
REDIS_URL=redis://127.0.0.1:6379
```

### Run Backend Server

```bash
npm run dev
```

```

---

## 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```


```

---

## 🧠 Authentication Logic

* JWT token generated on login
* Token stored in **localStorage**
* Token sent via Axios interceptor
* Redis stores active session tokens
* Middleware validates token + Redis session

---

## 🔐 API Endpoints

| Method | Endpoint      | Description                |
| ------ | ------------- | -------------------------- |
| POST   | /api/register | Register user              |
| POST   | /api/login    | Login user                 |
| GET    | /api/profile  | Get profile (Protected)    |
| PUT    | /api/profile  | Update profile (Protected) |

---

## 📌 Best Practices Followed

* Separation of frontend & backend
* Secure password hashing
* Redis-based session validation
* Reusable Tailwind components
* Clean folder structure
* Scalable architecture

---

## 🧪 Testing

* Use Postman for backend API testing
* Frontend tested via browser
* Token & session validation via Redis

---

## 🏆 Use Case

* Internship project
* Entry-level full stack developer assignment
* Interview demo project
* Portfolio showcase

---

## 📜 License

This project is for educational and learning purposes.

---

## 🙌 Author

**Rahamath Sulaiman**
Full Stack Developer (MERN)

---

## ⭐ If you like this project

Give it a ⭐ and use it in your portfolio 🚀
