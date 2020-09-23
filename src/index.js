// libs
import "dotenv/config"; // Make env vars available // Deploy need its all .env
import express from "express";
import cors from "cors";
// others
import { serveApi } from "./api";
import database from "./database";

const app = express();

// Extracts the entire body portion of an incoming request stream and makes it accessible on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Lib for Remove CORS
app.use(cors());

serveApi(app);

database.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}!`);
  });
});
