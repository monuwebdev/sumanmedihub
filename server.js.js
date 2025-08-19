const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 4000;
const SECRET = process.env.JWT_SECRET || "supersecretkey";

app.use(cors());
app.use(bodyParser.json());

// DB setup
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) console.error(err.message);
  console.log('Connected to SQLite database.');
});

// Sample users
const users = {
  "admin@lifecare.test": { password: "admin123", role: "admin" },
  "dr@lifecare.test": { password: "doctor123", role: "doctor" },
  "pharm@medihub.test": { password: "pharm123", role: "pharmacist" },
  "patient@demo.test": { password: "patient123", role: "patient" }
};

// Auth route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (users[email] && users[email].password === password) {
    const token = jwt.sign({ email, role: users[email].role }, SECRET, { expiresIn: "1h" });
    return res.json({ token, role: users[email].role });
  }
  res.status(401).json({ error: "Invalid credentials" });
});

// Protected test route
app.get('/api/dashboard', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    res.json({ message: `Welcome to ${user.role} dashboard!` });
  });
});

app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
