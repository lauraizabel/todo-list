//Criando e exportando nova pool para elephantSQL
//require("dotenv").config();
const knex = require('knex')
const knexfile =  require("../knexfile")

const env = process.env.NODE_ENV || 'development'
const configOptions = knexfile[env]

module.exports = knex(configOptions)

// const { Pool } = require("pg"); //pool do elephantSQL

// const databaseConfig = { connectionString: process.env.DATABASE_URL };

// const pool = new Pool (databaseConfig);

// module.exports = pool;
