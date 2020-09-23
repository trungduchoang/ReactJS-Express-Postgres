const express = require("express");
// new: import User
const User = require("./User");
const app = express();
const PORT = 8080;

app.get("/", (_, res) => {
  res.send({ message: "endpoint working" });
});

app.get("/users", User.readAll);

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
