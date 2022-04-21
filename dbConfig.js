const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "3312",
  database: "Store",
  port: 5432,
});

module.exports = pool;