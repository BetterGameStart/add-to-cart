const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../../.env')});
const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

module.exports = pool;

// // Create the table schema
// CREATE TABLE games (
//   "id" SERIAL PRIMARY KEY,
//   "gameId" int UNIQUE NOT NULL,
//   "title" varchar(80),
//   "publisher" varchar(80),
//   "reviewScore" smallint CHECK ("reviewScore" >= 0 AND "reviewScore" < 6),
//   "reviewCount" int CHECK ("reviewCount" >= 0),
//   "ageRating" smallint CHECK ("ageRating" > 0 AND "ageRating" < 7),
//   "newPrice" numeric CHECK ("newPrice" > 0),
//   "usedPrice" numeric CHECK ("newPrice" > "usedPrice" AND "usedPrice" > 0),
//   "digitalPrice" numeric CHECK ("digitalPrice" > 0),
//   "storeLocation" varchar(160),
//   "inStock" boolean
// );
// // To copy the contents of the csv into the games table
// COPY games("gameId", "title", "publisher", "reviewScore", "reviewCount", "ageRating", "newPrice", "usedPrice", "digitalPrice", "storeLocation", "inStock")
// FROM '/home/geophreigh/Documents/Hack-Reactor/sdc/add-to-cart/db/data.csv' DELIMITER '|' CSV HEADER;
