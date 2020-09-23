const Sequelize = require("sequelize");
// your credentials
// const DATABASE_URL = 'postgres://postgres:root@127.0.0.1:5432/helloExpress';

// const database = new Sequelize(DATABASE_URL);
const database = new Sequelize("helloExpress", "postgres", "root", {
  dialect: "postgres",
});

module.exports = database;
