# RecipeHub RestAPI 🍽
A backend REST API for a **RecipeHub App** that provides structured, scalable, and secure access to cooking recipe data.  
This API is designed to serve as the core backend for web or mobile applications, enabling users to browse, search, and manage cooking recipes efficiently.

---

## 🎯 Project Purpose
The purpose of this project is to build a **secure, scalable, and maintainable REST API** that serves as the backend foundation for a **Recipe Catalog Application** with **user authentication and role-based access control.**

This API is designed to support two main types of users:
**Public Users**, who can register, log in, and browse cooking recipes
**Administrators**, who have access to a dedicated **Admin Control Panel (CPanel)** for managing application content

By separating **public access** and **admin-only operations**, this project demonstrates a real-world backend architecture where content consumption and content management are handled securely and efficiently.

### Key Objectives

- Provide a **centralized backend system** for recipe data that can be consumed by web or mobile applications
- Implement **authentication and authorization** using JWT
- Enforce **role-based access control** to protect admin resources
- Enable administrators to manage recipes and categories through a secure API
- Apply **RESTful principles and best practices** for clean, predictable endpoints
- Offer a **scalable project structure** suitable for long-term development and production environments

---

## 🛠️ Technologies
* Node JS (Back-end JavaScript runtime environment)
* Express JS (Back-end Framework)
* MongoDB (Database)
* Mongoose (Library to model the application data)
* Crypto (Password hash module)
* Joi (Request validation)
* JWT (Access Auth)
* dotenv (Set environment variables)
* pdfkit (PDF document generator)

---

## 🚀 Features

### General
- RESTful API architecture
- Clean and scalable project structure
- Centralized error handling
- Request validation

### Authentication & Authorization
- User registration
- User login
- JWT-based authentication
- Role-based access control (User & Admin)
- Protected routes

### User Features
- View recipe list
- View recipe details
- Search and filter recipes
- Pagination support

### Admin Features (Admin CPanel)
- Admin-only access
- Create, update, and delete recipes
- Manage recipe categories
- Upload and manage recipe images
- Content management via Admin Dashboard

---

## Endpoints

* Users

|    Path    |  Method  |    Description    |
| ---------- | -------- | ----------------- |
| /users     |  GET     | Get all users     |
| /users     |  POST    | Create user       |
| /users/:id |  GET     | Get user by id    |
| /users/:id |  PUT     | Update user by id |
| /users/:id |  DELETE  | Delete user by id |

* Recipes

|       Path       |  Method  |    Description      |
| ---------------- | -------- | ------------------- |
| /recipes         |  GET     | Get all recipes     |
| /recipes         |  POST    | Create recipe       |
| /recipes/:id     |  GET     | Get recipe by id    |
| /recipes/:id     |  PUT     | Update recipe by id |
| /recipes/:id     |  DELETE  | Delete recipe by id |
| /recipes/:id/pdf |  GET     | Generate recipe PDF |

---

## 📁 Project Structure

```bash
src/
├── config/
|   └── database.js
├── controllers/
|   ├── login.controller.js
|   ├── recipe.controller.js
|   ├── register.controller.js
|   └── user.controller.js
├── middlewares/
|   └── auth.middleware.js
├── models/
|   ├── index.js
|   ├── recipe.model.js
|   └── user.model.js
├── routes/
|   ├── recipe.route.js
|   └── user.route.js
├── utils/
|   └── pdf.js
├── validations/
|   ├── login.validation.js
|   └── register.valiation.js
├── .env
└── server.js