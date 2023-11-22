const { knexSnakeCaseMappers } = require("objection");

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "systems_threejs",
      user: "matt",
      password: null,
    },
    migrations: {
      directory: "./src/db/migrations",
    },
    seeds: {
      directory: "./src/db/seeds",
    },
    ...knexSnakeCaseMappers(),
  },
};
