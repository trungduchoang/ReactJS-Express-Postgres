import "dotenv/config"; // Make env vars available // Deploy need its all .env
import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); // Lib for Remove CORS

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
