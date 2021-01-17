// Criando e exportando nova pool para elephantSQL
require("dotenv").config();
const { Pool } = require("pg"); //pool do elephantSQL

const databaseConfig = { connectionString: process.env.DATABASE_URL };

const pool = new Pool (databaseConfig);

module.exports = pool;