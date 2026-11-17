# Task Management Backend Starter

> **Session 1 – Assignment**  
> *Build with AI. Review, Run & Verify.*

A clean, modular Node.js backend starter project implementing an in-memory Task Management system using modern ECMAScript Modules (ESM).

---

## 📌 Project Requirements Checklist

- [x] **1. Create a Node.js project using ESM (`"type": "module"` in `package.json`).**
- [x] **2. Organize Tasks and Users into separate, decoupled modules.**
- [x] **3. Implement simple task operations using in-memory data (CRUD & associations).**
- [x] **4. Configure npm scripts (`start`, `dev`) and a proper `.gitignore`.**
- [x] **5. Run the project and verify its terminal output.**
- [x] **6. Push the project to GitHub with a clear, structured README.**

---

## 📁 Project Structure

```text
task-management-backend-starter/
├── .gitignore               # Ignored files (node_modules, logs, env)
├── README.md                # Project documentation
├── package.json             # ESM configuration and npm scripts
└── src/
    ├── app.js               # Main entry point demonstrating all operations
    └── modules/
        ├── tasks/
        │   └── tasks.js     # Task in-memory store and CRUD operations
        └── users/
            └── users.js     # User in-memory store and helper functions
```

---

## ⚙️ Prerequisites

- **Node.js**: v18.0.0 or later (Tested on Node v26)
- **npm**: v9.0.0 or later

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yusufmadarat/task-management-backend-starter.git
cd task-management-backend-starter
```

### 2. Run the application
Using standard npm script:
```bash
npm start
```

Or run in development watch mode (auto-reload on code changes):
```bash
npm run dev
```

---

## 🧩 Modules Overview

### 👤 Users Module (`src/modules/users/users.js`)
Manages the in-memory user registry:
- `listUsers()`: Returns all registered users.
- `findUserById(id)`: Retrieves a specific user by their numerical ID.
- `createUser({ name, email, role })`: Validates and adds a new user with auto-incrementing ID.

### 📋 Tasks Module (`src/modules/tasks/tasks.js`)
Manages in-memory tasks and associates tasks with users:
- `listTasks()`: Returns all tasks.
- `listTasksWithUsers()`: Returns tasks enriched with assigned user name and contact info.
- `findTaskById(id)`: Retrieves a task by ID.
- `createTask({ title, description, userId, priority })`: Creates a new task in `pending` status.
- `updateTaskStatus(id, newStatus)`: Updates task status (`pending`, `in-progress`, `completed`).
- `deleteTask(id)`: Removes a task by ID.
- `listTasksByUser(userId)`: Returns all tasks assigned to a specific user.

---

## 🖥️ Verified Execution Output

```text
╔════════════════════════════════════════════════════════════╗
║           TASK MANAGEMENT BACKEND STARTER (ESM)            ║
║         Build with AI. Review, Run & Verify.               ║
╚════════════════════════════════════════════════════════════╝

============================================================
  1. INITIAL USERS
============================================================
┌─────────┬────┬─────────────────┬─────────────────────┬───────────────────┐
│ (index) │ id │ name            │ email               │ role              │
├─────────┼────┼─────────────────┼─────────────────────┼───────────────────┤
│ 0       │ 1  │ 'Yusuf Madarat' │ 'yusuf@example.com' │ 'Developer'       │
│ 1       │ 2  │ 'Sara Ahmad'    │ 'sara@example.com'  │ 'Project Manager' │
│ 2       │ 3  │ 'Omar Hassan'   │ 'omar@example.com'  │ 'QA Engineer'     │
└─────────┴────┴─────────────────┴─────────────────────┴───────────────────┘

============================================================
  2. INITIAL TASKS
============================================================
┌─────────┬────┬──────────────────────────────────┬───────────────┬──────────┬────────┐
│ (index) │ id │ title                            │ status        │ priority │ userId │
├─────────┼────┼──────────────────────────────────┼───────────────┼──────────┼────────┤
│ 0       │ 1  │ 'Setup Node.js project with ESM' │ 'completed'   │ 'high'   │ 1      │
│ 1       │ 2  │ 'Create module structure'        │ 'in-progress' │ 'high'   │ 1      │
│ 2       │ 3  │ 'Review API Architecture'        │ 'pending'     │ 'medium' │ 2      │
└─────────┴────┴──────────────────────────────────┴───────────────┴──────────┴────────┘

============================================================
  3. CREATE NEW USER
============================================================
✔ New user created successfully:
{ id: 4, name: 'Layla Kareem', email: 'layla@example.com', role: 'Backend Engineer' }

============================================================
  4. CREATE NEW TASK
============================================================
✔ New task created and assigned to user: {
  id: 4,
  title: 'Implement unit tests',
  description: 'Write automated tests for task in-memory CRUD operations',
  status: 'pending',
  priority: 'high',
  userId: 4
}

============================================================
  5. FIND TASK BY ID (ID = 2)
============================================================
Found task: {
  id: 2,
  title: 'Create module structure',
  status: 'in-progress',
  priority: 'high',
  userId: 1
}

============================================================
  6. UPDATE TASK STATUS (ID = 2 -> COMPLETED)
============================================================
✔ Task status updated: {
  id: 2,
  title: 'Create module structure',
  status: 'completed',
  priority: 'high',
  userId: 1
}

============================================================
  7. LIST TASKS ASSIGNED TO USER: LAYLA KAREEM (ID: 4)
============================================================
[
  {
    id: 4,
    title: 'Implement unit tests',
    status: 'pending',
    priority: 'high',
    userId: 4
  }
]

============================================================
  8. DELETE TASK (ID = 3)
============================================================
✔ Deleted task: { id: 3, title: 'Review API Architecture', status: 'pending', userId: 2 }

============================================================
  9. FINAL ACTIVE TASKS WITH ASSIGNED USERS
============================================================
┌─────────┬────┬──────────────────────────────────┬─────────────┬──────────┬─────────────────┬─────────────────────┐
│ (index) │ ID │ Title                            │ Status      │ Priority │ Assigned To     │ Email               │
├─────────┼────┼──────────────────────────────────┼─────────────┼──────────┼─────────────────┼─────────────────────┤
│ 0       │ 1  │ 'Setup Node.js project with ESM' │ 'completed' │ 'high'   │ 'Yusuf Madarat' │ 'yusuf@example.com' │
│ 1       │ 2  │ 'Create module structure'        │ 'completed' │ 'high'   │ 'Yusuf Madarat' │ 'yusuf@example.com' │
│ 2       │ 4  │ 'Implement unit tests'           │ 'pending'   │ 'high'   │ 'Layla Kareem'  │ 'layla@example.com' │
└─────────┴────┴──────────────────────────────────┴─────────────┴──────────┴─────────────────┴─────────────────────┘

============================================================
  ALL OPERATIONS EXECUTED SUCCESSFULLY!
============================================================
```

---

## 📄 License
ISC
