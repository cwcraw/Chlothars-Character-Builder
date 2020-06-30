// Update with your config settings.

require("dotenv").config(require("find-config")(".env"))
const config = require("../config");


module.exports = {
  client: "pg",
  connection:  config.db.connection ||     
  `postgres://${process.env.USER}:${process.env.PASSWORD}@127.0.0.1:5432/characters`,
  // pool: {
    pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations",
  },
  seeds: {
    directory: '../seeds/'
  }
};
