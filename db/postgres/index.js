require('dotenv').config({path: '../../.env'});
const { Sequelize } = require('sequelize');
const db = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:5432/cartgames`);

const connection = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connection();

const Game = db.define('game', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  gameId: Sequelize.INTEGER,
  title: Sequelize.STRING(80),
  publisher: Sequelize.STRING(80),
  reviewScore: Sequelize.INTEGER,
  reviewCount: Sequelize.INTEGER,
  ageRating: Sequelize.INTEGER,
  newPrice: Sequelize.DECIMAL,
  usedPrice: Sequelize.DECIMAL,
  digitalPrice: Sequelize.DECIMAL,
  storeLocation: Sequelize.STRING(160),
  inStock: Sequelize.BOOLEAN,

})

// // Create the table schema
// CREATE TABLE games (
//   id SERIAL PRIMARY KEY,
//   gameId int UNIQUE NOT NULL,
//   title varchar(80),
//   publisher varchar(80),
//   reviewScore smallint CHECK (reviewScore >= 0 AND reviewScore < 6),
//   reviewCount int CHECK (reviewCount >= 0),
//   ageRating smallint CHECK (ageRating > 0 AND ageRating < 7),
//   newPrice numeric CHECK (newPrice > 0),
//   usedPrice numeric CHECK (newPrice > usedPrice AND usedPrice > 0),
//   digitalPrice numeric CHECK (digitalPrice > 0),
//   storeLocation varchar(160),
//   inStock boolean
// );
// // To copy the contents of the csv into the games table
// COPY games(gameId, title, publisher, reviewScore, reviewCount, ageRating, newPrice, usedPrice, digitalPrice, storeLocation, inStock)
// FROM '/home/geophreigh/Documents/Hack-Reactor/sdc/add-to-cart/db/data.csv' DELIMITER '|' CSV HEADER;
