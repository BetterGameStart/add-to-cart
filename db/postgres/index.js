const pool = require('./config.js');

// pool.query('SELECT * FROM games WHERE gameId=1', (err, res) => {
//   console.log('Error: ', err, '\nResult: ', res)
//   pool.end()
// })


const addGame = (game, cb) => {
  // Add a new record to the games table
    const { gameId, title, publisher, reviewScore, reviewCount, ageRating, newPrice, usedPrice, digitalPrice, storeLocation, inStock } = game;
    const text = 'INSERT INTO games ("gameId", "title", "publisher", "reviewScore", "reviewCount", "ageRating", "newPrice", "usedPrice", "digitalPrice", "storeLocation", "inStock") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
    const values = [gameId, title, publisher, reviewScore, reviewCount, ageRating, newPrice, usedPrice, digitalPrice, storeLocation, inStock];
    pool.query(text, values, (err, res) => {
      cb(err, res);
    })
};

const getGame = (gameId, cb) => {
  // Get a single record from the games table by gameId
  const text = 'SELECT * FROM games WHERE "gameId" = $1';
  const values = [gameId];

  pool.query(text, values, (err, res) => {
    cb(err, [res.rows[0]]);
  })
};

const updateGame = (gameId, game, cb) => {
  // Update an existing record in the games table by gameId
  const { gameId, title, publisher, reviewScore, reviewCount, ageRating, newPrice, usedPrice, digitalPrice, storeLocation, inStock } = game;
  const text = 'UPDATE games SET "title" = $2, "publisher" = $3, "reviewScore" = $4, "reviewCount" = $5, "ageRating" = $6, "newPrice" = $7, "usedPrice" = $8, "digitalPrice" = $9, "storeLocation" = $10, "inStock" = $11 WHERE "gameId" = $1';
  const values = [gameId, title, publisher, reviewScore, reviewCount, ageRating, newPrice, usedPrice, digitalPrice, storeLocation, inStock];
  pool.query(text, values, (err, res) => {
    cb(err, res);
  })
};

const deleteGame = (gameId, cb) => {
  // Delete a single record from the games table by gameId
  const text = 'DELETE FROM games WHERE "gameId" = $1';
  const values = [gameId];
  pool.query(text, values, (err, res) => {
    cb(err, res);
  })
};

// I don't really want to enable this capability. I want truncating the table to be a very intentional choice.
// const deleteAll = () => {
//   // Delete all the records in the games table
//   pool.connect((err, client, done) => {
//     const text = 'TRUNCATE TABLE games';
//     const values = [];
//     if (err) throw err;
//     client.query(text, values, (err, res) => {
//       done();
//     })
//   })
// };

module.exports = {
  addGame,
  getGame,
  updateGame,
  deleteGame,
  // deleteAll,
};