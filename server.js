const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Parse incoming JSON data
app.use(bodyParser.json());

// Sample in-memory data store for users (Replace this with a proper database in a real application)
const users = [];

// Signup route
app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  // Check if the username is already taken
  if (users.some((user) => user.username === username)) {
    return res.status(409).json({ message: "Username already exists." });
  }

  // Save the new user to the in-memory data store (Replace this with database storage in a real application)
  users.push({ username, password });

  return res.status(201).json({ message: "User registered successfully." });
});

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find the user in the in-memory data store (Replace this with database lookup in a real application)
  const user = users.find((user) => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials." });
  }

  return res.status(200).json({ message: "Login successful." });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
