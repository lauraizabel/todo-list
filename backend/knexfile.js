// Update with your config settings.
const { database_url } = require("./env")

module.exports = {

  development: {
    client: 'pg',
    connection: database_url,
    migrations: {
      directory: './models/migrations'
    },
    seeds: {directory: './models/seeds'}
  },

  testing: {
    client: 'pg',
    connection: database_url,
    migrations: {
      directory: './models/migrations',
    },
    seeds: { directory: './models/seeds' },
  },

  production: {
    client: 'pg',
    connection: database_url,
    migrations: {
      directory: './models/migrations',
    },
    seeds: { directory: './models/seeds' },
  }

};
