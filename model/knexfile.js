// Update with your config settings.
const config = require("../config");

module.exports = {
  client: "pg",
  connection:  process.env.DATABASE_URL || config.db.connection,
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
