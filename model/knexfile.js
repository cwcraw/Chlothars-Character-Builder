// Update with your config settings.

require("dotenv").config();
const config = require("../config");


module.exports = {
  client: "pg",
  connection:  process.env.DATABASE_URL ||
  `postgres://${process.env.USER}:${process.env.PASSWORD}@127.0.0.1:5432/charlist`
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
