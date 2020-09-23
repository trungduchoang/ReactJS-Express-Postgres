import * as models from "@/models";

export function serveApi(app) {
  app.get("/users", models.Users.readAll);
}
