/**
 * Application Entry Point
 * Demonstrates modular design, ESM imports, and in-memory operations.
 */

import { listUsers, findUserById, createUser } from "./modules/users/users.js";
import {
  listTasks,
  listTasksWithUsers,
  findTaskById,
  createTask,
  updateTaskStatus,
  deleteTask,
  listTasksByUser,
} from "./modules/tasks/tasks.js";

function printSeparator(title = "") {
  console.log("\n" + "=".repeat(60));
  if (title) {
    console.log(`  ${title.toUpperCase()}`);
    console.log("=".repeat(60));
  }
}

console.log("╔════════════════════════════════════════════════════════════╗");
console.log("║           TASK MANAGEMENT BACKEND STARTER (ESM)            ║");
console.log("║         Build with AI. Review, Run & Verify.               ║");
console.log("╚════════════════════════════════════════════════════════════╝");

// 1. Initial State: List Users
printSeparator("1. Initial Users");
const initialUsers = listUsers();
console.table(initialUsers);

// 2. Initial State: List Tasks
printSeparator("2. Initial Tasks");
const initialTasks = listTasks();
console.table(initialTasks);

// 3. User Operation: Create a new user
printSeparator("3. Create New User");
const newUser = createUser({
  name: "Layla Kareem",
  email: "layla@example.com",
  role: "Backend Engineer",
});
console.log("✔ New user created successfully:");
console.log(newUser);

// 4. Task Operation: Create a new task assigned to the new user
printSeparator("4. Create New Task");
const createdTask = createTask({
  title: "Implement unit tests",
  description: "Write automated tests for task in-memory CRUD operations",
  userId: newUser.id,
  priority: "high",
});
console.log("✔ New task created and assigned to user:", createdTask);

// 5. Task Operation: Find task by ID
printSeparator("5. Find Task by ID (ID = 2)");
const foundTask = findTaskById(2);
console.log("Found task:", foundTask);

// 6. Task Operation: Update task status
printSeparator("6. Update Task Status (ID = 2 -> completed)");
const updatedTask = updateTaskStatus(2, "completed");
console.log("✔ Task status updated:", updatedTask);

// 7. Task Operation: List tasks for a specific user
printSeparator(`7. List Tasks Assigned to User: ${newUser.name} (ID: ${newUser.id})`);
const userTasks = listTasksByUser(newUser.id);
console.log(userTasks);

// 8. Task Operation: Delete a task
printSeparator("8. Delete Task (ID = 3)");
const removedTask = deleteTask(3);
console.log("✔ Deleted task:", removedTask);

// 9. Final Report: List all tasks with user information enriched
printSeparator("9. Final Active Tasks with Assigned Users");
const enrichedTasks = listTasksWithUsers();
console.table(
  enrichedTasks.map((t) => ({
    ID: t.id,
    Title: t.title,
    Status: t.status,
    Priority: t.priority,
    "Assigned To": t.assignedUser,
    Email: t.userEmail || "N/A",
  }))
);

printSeparator("All Operations Executed Successfully!");
