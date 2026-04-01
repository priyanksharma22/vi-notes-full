# Vi-Notes | User Authentication & Dashboard (#2)

This repository contains the implementation of **Feature #2: User Login and Registration** for the Vi-Notes platform. Vi-Notes is an authenticity verification platform that ensures genuine human writing through keyboard activity monitoring.

## 🚀 Features Implemented
- **User Registration:** Secure signup with email and password.
- **User Login:** Authenticated access using JWT (JSON Web Tokens).
- **Password Security:** Hashing using `bcryptjs` before storing in MongoDB.
- **Protected Dashboard:** A private route that only logged-in users can access.
- **Minimalist UI:** A clean, card-based interface for Auth and Notes display.

---

## 🛠️ Tech Stack
- **Frontend:** React.js, TypeScript, CSS3
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Local)
- **Authentication:** JWT, LocalStorage

---

## 💻 How to Run the Project

Follow these steps to get the project running on your local machine.

### 1. Prerequisite: Database (MongoDB)
Ensure MongoDB is installed and running. Open a terminal and start the MongoDB daemon:
```bash
mongod


cd backend
npm install
node src/index.js


cd frontend
npm install --legacy-peer-deps
npm start
