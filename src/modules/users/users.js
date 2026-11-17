/**
 * Users Module - In-Memory Storage & Operations
 */

const users = [
  { id: 1, name: "Yusuf Madarat", email: "yusuf@example.com", role: "Developer" },
  { id: 2, name: "Sara Ahmad", email: "sara@example.com", role: "Project Manager" },
  { id: 3, name: "Omar Hassan", email: "omar@example.com", role: "QA Engineer" },
];

let nextUserId = 4;

/**
 * Returns all registered users
 * @returns {Array} List of users
 */
export function listUsers() {
  return [...users];
}

/**
 * Find user by their unique ID
 * @param {number} id
 * @returns {object|undefined} User object or undefined
 */
export function findUserById(id) {
  return users.find((user) => user.id === id);
}

/**
 * Create and add a new user to the in-memory store
 * @param {object} userData - { name, email, role }
 * @returns {object} The created user
 */
export function createUser({ name, email, role = "Member" }) {
  if (!name || !email) {
    throw new Error("Name and email are required to create a user.");
  }

  const newUser = {
    id: nextUserId++,
    name,
    email,
    role,
  };

  users.push(newUser);
  return newUser;
}

export { users };
