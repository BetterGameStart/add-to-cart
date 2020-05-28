const pool = require('./config.js');

// pool.query('SELECT * FROM games WHERE gameId=1', (err, res) => {
//   console.log('Error: ', err, '\nResult: ', res)
//   pool.end()
// })

const addGame = (game, cb) => {
  // Add a new record to the games table
  pool.connect((err, client, done) => {
    const { gameId, title, publisher, reviewScore, reviewCount, ageRating, newPrice, usedPrice, digitalPrice, storeLocation, inStock } = game;
    const text = 'INSERT INTO games ("gameId", "title", "publisher", "reviewScore", "reviewCount", "ageRating", "newPrice", "usedPrice", "digitalPrice", "storeLocation", "inStock") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
    const values = [gameId, title, publisher, reviewScore, reviewCount, ageRating, newPrice, usedPrice, digitalPrice, storeLocation, inStock];
    if (err) throw err;
    client.query(text, values, (err, res) => {
      console.log('Error: ', err, '\nResults: ', res);
      done();
      cb(err, res);
    })
  })
};

const getGame = (gameId, cb) => {
  // Get a single record from the games table by gameId
  pool.connect((err, client, done) => {
    const text = 'SELECT * FROM games WHERE "gameId" = $1';
    const values = [gameId];
    if (err) throw err;
    client.query(text, values, (err, res) => {
      done();
      cb(err, [res.rows[0]]);
    })
  })
};

const updateGame = (gameId, game, cb) => {
  // Update an existing record in the games table by gameId
};

const deleteGame = (gameId, cb) => {
  // Delete a single record from the games table by gameId
  pool.connect((err, client, done) => {
    const text = 'DELETE FROM games WHERE "gameId" = $1';
    const values = [gameId];
    if (err) throw err;
    client.query(text, values, (err, res) => {
      done();
      cb(err, res);
    })
  })
};

const deleteAll = () => {
  // Delete all the records in the games table
};

module.exports = {
  addGame,
  getGame,
  updateGame,
  deleteGame,
  deleteAll,
};