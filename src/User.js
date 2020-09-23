const Sequelize = require("sequelize");
const database = require("./db");

const User = database.define(
  "users",
  {
    nickname: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
);

User.readAll = async (req, res) => {
  const users = await User.findAll();
  return res.send({ users });
};

module.exports = User;
