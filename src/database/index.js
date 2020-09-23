import Sequelize from "sequelize";

const database = new Sequelize(
  "postgres://postgres:root@127.0.0.1:5432/helloExpress"
);

export default database;
