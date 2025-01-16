# ThreadSync

ThreadSync is a demo eCommerce website designed for clothing shopping. This project showcases the integration of a robust backend with a dynamic frontend to deliver a seamless shopping experience.

---

## Features

- User authentication: Login and Register functionality.
- Product catalog with detailed product information.
- User and product data management through APIs.

---

## Tech Stack

### Backend
- **Node.js**: For server-side scripting.
- **Express.js**: For building RESTful APIs.
- **MongoDB**: Database for storing user and product data.

Key Backend Features:
- APIs to handle user data.
- APIs to handle product data.

### Frontend
- **React**: Built using Vite for a fast development experience.
- Component-based architecture for modularity and reusability.
- Login and Register pages for user management.

---

## Installation

### Prerequisites
- **Node.js** (>= 14.x)
- **MongoDB** (Running instance or cloud database like MongoDB Atlas)
- **npm** (Node Package Manager)

### Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ThreadSync.git
   cd ThreadSync
   ```

2. **Backend Setup**
   - Navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Configure environment variables in a `.env` file:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```
   - Start the backend server:
     ```bash
     npm run start
     ```

3. **Frontend Setup**
   - Navigate to the frontend folder:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```

---

## Usage

1. Navigate to the frontend development server's URL (typically `http://localhost:5173`).
2. Explore the clothing catalog, register, and login.
3. Backend server will be running on `http://localhost:5000`.

---

## Folder Structure

```
ThreadSync
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   └── server.js
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── App.jsx
│   └── vite.config.js
└── README.md




```
## Contributions

Contributions are welcome! Please fork the repository and submit a pull request for any feature requests or bug fixes.



## Contact

For any questions or feedback, please reach out at:
- **Email**: [ranafalak18@gmail.com](ranafalak18@gmail.com)
- **GitHub**: [falakrana](https://github.com/falakrana)

