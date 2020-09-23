// libs
import "dotenv/config"; // Make env vars available // Deploy need its all .env
import express from "express";
import cors from "cors";
// others
import { serveApi } from "./serveApi";
import { database } from "./models";
import {
  reinitializeDBOnServerStart,
  createUsersWithMessages,
} from "./dataSources";

const app = express();

// Extracts the entire body portion of an incoming request stream and makes it accessible on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Lib for Remove CORS
app.use(cors());

serveApi(app);

database.sync({ force: reinitializeDBOnServerStart }).then(() => {
  if (reinitializeDBOnServerStart) {
    createUsersWithMessages();
  }

  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
  });
});
