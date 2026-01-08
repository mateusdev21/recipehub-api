# RecipeHub RestAPI 🍽
A backend REST API for a **RecipeHub App** that provides structured, scalable, and secure access to cooking recipe data.  
This API is designed to serve as the core backend for web or mobile applications, enabling users to browse, search, and manage cooking recipes efficiently.

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
