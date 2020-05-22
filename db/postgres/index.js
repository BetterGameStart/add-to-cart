require('dotenv').config();
const { Pool, Client } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
