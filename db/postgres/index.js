const pool = require('./config.js');

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})


const addGame = (game, cb) => {
  // Add a new record to the games table
};

const getGame = (gameId, cb) => {
  // Get a single record from the games table by gameId
};

const updateGame = (gameId, game, cb) => {
  // Update an existing record in the games table by gameId
};

const deleteGame = (gameId, cb) => {
  // Delete a single record from the games table by gameId
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