/**
 * Tasks Module - In-Memory Storage & Operations
 */

import { findUserById } from "../users/users.js";

const VALID_STATUSES = ["pending", "in-progress", "completed"];

const tasks = [
  {
    id: 1,
    title: "Setup Node.js project with ESM",
    description: "Initialize package.json and set type to module",
    status: "completed",
    priority: "high",
    userId: 1,
  },
  {
    id: 2,
    title: "Create module structure",
    description: "Separate tasks and users into clean dedicated modules",
    status: "in-progress",
    priority: "high",
    userId: 1,
  },
  {
    id: 3,
    title: "Review API Architecture",
    description: "Align module interfaces with course specifications",
    status: "pending",
    priority: "medium",
    userId: 2,
  },
];

let nextTaskId = 4;

/**
 * Returns all tasks
 * @returns {Array} List of tasks
 */
export function listTasks() {
  return [...tasks];
}

/**
 * Returns all tasks enriched with assigned user information
 * @returns {Array} List of tasks with user details
 */
export function listTasksWithUsers() {
  return tasks.map((task) => {
    const user = findUserById(task.userId);
    return {
      ...task,
      assignedUser: user ? user.name : "Unassigned",
      userEmail: user ? user.email : null,
    };
  });
}

/**
 * Find a specific task by ID
 * @param {number} id
 * @returns {object|undefined} Task object or undefined
 */
export function findTaskById(id) {
  return tasks.find((task) => task.id === id);
}

/**
 * Create and add a new task
 * @param {object} taskData - { title, description, userId, priority }
 * @returns {object} The created task
 */
export function createTask({ title, description, userId, priority = "medium" }) {
  if (!title) {
    throw new Error("Task title is required.");
  }

  if (userId && !findUserById(userId)) {
    throw new Error(`User with ID ${userId} does not exist.`);
  }

  const newTask = {
    id: nextTaskId++,
    title,
    description: description || "",
    status: "pending",
    priority,
    userId: userId || null,
  };

  tasks.push(newTask);
  return newTask;
}

/**
 * Update the status of an existing task
 * @param {number} id - Task ID
 * @param {string} newStatus - 'pending' | 'in-progress' | 'completed'
 * @returns {object} The updated task
 */
export function updateTaskStatus(id, newStatus) {
  if (!VALID_STATUSES.includes(newStatus)) {
    throw new Error(
      `Invalid status: "${newStatus}". Allowed values: ${VALID_STATUSES.join(", ")}`
    );
  }

  const task = findTaskById(id);
  if (!task) {
    throw new Error(`Task with ID ${id} not found.`);
  }

  task.status = newStatus;
  return task;
}

/**
 * Delete a task by ID
 * @param {number} id - Task ID
 * @returns {object} The deleted task
 */
export function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    throw new Error(`Task with ID ${id} not found.`);
  }

  const [deletedTask] = tasks.splice(index, 1);
  return deletedTask;
}

/**
 * List all tasks assigned to a specific user
 * @param {number} userId - User ID
 * @returns {Array} Tasks belonging to the user
 */
export function listTasksByUser(userId) {
  return tasks.filter((task) => task.userId === userId);
}

export { tasks };
