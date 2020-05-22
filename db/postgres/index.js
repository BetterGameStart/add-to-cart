require('dotenv').config();
const { Pool, Client } = require('pg');
const connectionString = 'postgresql://cartgames_user:5tOAr1*6pc9Z@localhost:5432/cartgames'

const pool = new Pool({ connectionString });

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
