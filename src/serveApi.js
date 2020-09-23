import { models } from "./models";

const globalMutableObj = {};

export function serveApi(app) {
  app.post("/messages", async (req, _, next) => {
    req.context = {
      models,
      me: await models.User.findByLogin("rwieruch"),
    };
    next();
  });

  app.post("/messages", (req, res, next) => {
    const reqContent = {
      messageId: req.body.id,
      text: req.body.text,
      fromAppUse: req.myMessage,
    };
    globalMutableObj[req.body.id] = reqContent;
    return res.send(reqContent);
  });
}
