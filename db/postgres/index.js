const pool = require('./config.js');

// pool.query('SELECT * FROM games WHERE gameId=1', (err, res) => {
//   console.log('Error: ', err, '\nResult: ', res)
//   pool.end()
// })

const addGame = (game, cb) => {
  // Add a new record to the games table
};

const getGame = (gameId, cb) => {
  // Get a single record from the games table by gameId
  pool.connect((err, client, done) => {
    console.log('gameId from inside getGame: ', gameId);
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