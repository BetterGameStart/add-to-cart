const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/index.js');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/games/:id', express.static(__dirname + '/../client/dist'));

app.post('/cartapi/', (req, res) => {
  // Add a new game using the values in req.body
  res.send('POST request to homepage')
});

app.get('/cartapi/:id', (req, res) => {
  const id = Number(path.basename(req.url));
  db.getGame(id, (err, result) => {
    if(err) {
      res.sendStatus(500).send(err);
      res.end();
    } else {
      res.send(result);
      res.end();
    }
  });
});

app.put('/cartapi/:id', (req, res) => {
  // Update the game with gameId = id using the values in req.body
  res.send('PUT request to homepage')
});

app.delete('/cartapi/:id', (req, res) => {
  // TODO: Delete the game with gameId = id
  res.send('DELETE request to homepage')
});


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
