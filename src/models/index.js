import Sequelize from "sequelize";

// const sequelize = new Sequelize(
//   process.env.DATABASE,
//   process.env.DATABASE_USER,
//   process.env.DATABASE_PASSWORD,
//   {
//     dialect: "postgres",
//   }
// );
const sequelize = new Sequelize(
  "postgres://[postgres]:[root]@127.0.0.1:5432/node-postgres-sequelize"
);

const models = {
  User: sequelize.import("./user"),
  Message: sequelize.import("./message"),
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { models, sequelize };
