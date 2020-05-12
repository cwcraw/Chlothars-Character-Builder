// Update with your config settings.
const config = require("../config");
require("dotenv").config();


module.exports = {
  client: "pg",
  // connection:  process.env.DATABASE_URL || config.db.connection,
  connection:  process.env.DATABASE_URL || `postgres://${process.env.USER}:${process.env.PASSWORD}@127.0.0.1:5432/char_list`,
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
