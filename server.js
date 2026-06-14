const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// fake users (no SQL)
const users = [
  { username: "admin", password: "1234" }
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u =>
    u.username === username && u.password === password
  );

  if (user) {
    res.json({ message: "Login success" });
  } else {
    res.json({ message: "Invalid login" });
  }
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});