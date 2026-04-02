🚀 AvanishBlogs-backend

Backend service for **AvanishBlogs**, a modern blogging platform.
This API handles authentication, blog management, image uploads, and secure communication between frontend and database.

Built with scalable architecture and clean code practices to ensure maintainability and production readiness.

---

## ✨ Features

* 🔐 User Authentication (Signup / Login)
* 📝 Blog CRUD (Create, Read, Update, Delete)
* 🖼️ Image Upload Support
* 🛡️ Secure API Routes with validation
* ⚡ RESTful API architecture
* 🌍 Environment-based configuration
* 📦 Modular folder structure
* ❌ Centralized error handling

---

## 🛠️ Tech Stack

* **Node.js** – Runtime environment
* **Express.js** – Backend framework
* **MongoDB / Database** – Data storage
* **Mongoose / ORM** – Database modeling
* **JWT** – Authentication
* **Multer / Cloud storage** – Image upload
* **dotenv** – Environment variables

---

## 📂 Project Structure

```
AvanishBlogs-backend
│
├── public                     # Public static files (if any)
│
├── src
│   ├── config                 # Database & environment configuration
│   ├── controllers            # Route controllers (business logic)
│   ├── data                   # Static data / seed files
│   ├── middlewares            # Custom middleware (auth, error handling)
│   ├── models                 # Database schemas/models
│   ├── routes                 # API route definitions
│   ├── uploads                # Uploaded files (images, media)
│   ├── utils                  # Helper functions & utilities
│
│   ├── app.js                 # Express app configuration
│   └── server.js              # Server entry point
│
├── .env                       # Environment variables
├── .gitignore
├── package.json               # Project metadata & dependencies
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation

```bash
# Clone repository
git clone https://github.com/your-username/AvanishBlogs-backend.git

# Go to project folder
cd AvanishBlogs-backend

# Install dependencies
npm install

# Lint Configuration :
| Package                | Purpose                                     |
| ---------------------- | ------------------------------------------- |
| eslint                 | finds errors in JS code                     |
| prettier               | auto formats code                           |
| eslint-config-prettier | prevents conflict between eslint & prettier |
| eslint-plugin-prettier | runs prettier inside eslint                 |
| eslint-config-airbnb   | popular JS style guide                      |
| eslint-plugin-node     | Node.js linting rules                       |
| eslint-plugin-import   | checks import/export syntax                 |
| eslint-plugin-jsx-a11y | accessibility rules                         |
| eslint-plugin-react    | React best practices                        |

npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev
```

---

## 🔑 Environment Variables

Create a `.env` file in root folder:

```
PORT=5000
MONGO_URI=your_database_connection
JWT_SECRET=your_secret_key
```

---

## ▶️ Run Locally

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 📡 API Endpoints (Example)

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |
| GET    | /api/posts         | Get all blogs |
| POST   | /api/posts         | Create blog   |
| PUT    | /api/posts/:id     | Update blog   |
| DELETE | /api/posts/:id     | Delete blog   |

---

## 📈 Future Improvements

* 🔍 Search & filter blogs
* ❤️ Like & comment system
* 👤 User profile management
* ☁️ Cloud image storage integration
* 📊 Analytics dashboard

---

## 👨‍💻 Author

**Avanish Maurya**

Frontend Developer → Full Stack Journey 🚀
Building projects and documenting learning in public.



