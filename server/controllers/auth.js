const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = []; // Временное хранилище (замените на базу данных)

const register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: "User registered successfully" });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user) return res.status(400).json({ message: "User not found" });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid)
    return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ username }, "your-secret-key", { expiresIn: "1h" });
  res.json({ token });
};

module.exports = { register, login };
