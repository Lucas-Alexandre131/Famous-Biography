# Famous Biography API

API for managing famous biographies, designed with a focus on performance, security, and clean code organization.

---

## Technologies Used

* Node.js with TypeScript
* MySQL
* Sequelize (ORM)
* Redis (cache)
* JWT (authentication)
* Bcrypt (password hashing)
* Custom typing (Types)

---

## Project Structure

```bash
src/
│
├── controllers/   # Handles HTTP requests and responses
├── data/          # Database and Redis configuration/connection
├── middlewares/   # Middlewares (authentication, validations, etc.)
├── models/        # Sequelize models and entities
├── routes/        # Application route definitions
├── services/      # Business logic
├── types/         # Global interfaces and typings
├── utils/         # Utility functions
│
└── index.ts       # Application entry point
```

---

## Features

* User registration and authentication
* Password hashing using bcrypt
* JWT-based authentication
* Full CRUD for biographies
* Redis caching for performance optimization
* Layered architecture (Controller → Service → Model)

---

## Scripts

```bash
npm run dev     # Run in development mode
npm run build   # Build the project
npm start       # Run in production
```

---

## Endpoints (Example)

### Authentication

* POST /auth/register
* POST /auth/login

### Biographies

* GET /biographies
* GET /biographies/:id
* POST /biographies
* PUT /biographies/:id
* DELETE /biographies/:id

---

## Performance

* Redis caching for frequently accessed data
* Reduced database load
* Faster response times on critical endpoints

---

## Security

* Passwords hashed using bcrypt
* JWT-based authentication
* Protected routes via middlewares

---

## Best Practices

* Clear separation of responsibilities
* Strong typing with TypeScript
* Scalable and modular structure
* Well-defined architecture layers

---

## Application Initialization

The application is split into two main files:

### app.ts

Responsible for configuring the application:

* Middlewares
* Routes
* General settings

Does not start the server.

### server.ts

Responsible for starting the server:

* Imports the `app`
* Defines the port
* Calls `listen`

### Example

```ts
// app.ts
import express from 'express';

const app = express();

app.use(express.json());

export default app;
```

```ts
// server.ts
import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT);
```
