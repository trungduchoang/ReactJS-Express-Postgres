import Sequelize from "sequelize";
import database from "../database";

const Users = database.define(
  "users",
  {
    nickname: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

Users.readAll = async (_, res) => {
  const users = await Users.findAll();
  return res.send({ users });
};

export { Users };
