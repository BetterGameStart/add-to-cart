require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/postgres/index.js');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/games/:id', express.static(__dirname + '/../client/dist'));

app.post('/cartapi/', (req, res) => {
  db.addGame(req.body, (err, result) => {
    if (err) {
      res.status(500).send('Error creating new record.');
    } else {
      res.status(201).send(result);
    }
  });
});

app.get('/cartapi/:id', (req, res) => {
  const id = Number(path.basename(req.url));
  db.getGame(id, (err, result) => {
    if(err) {
      res.status(500).send('Could not find that product.');
    } else {
      res.status(200).send(result);
    }
  });
});

app.put('/cartapi/:id', (req, res) => {
  const id = Number(path.basename(req.url));
  db.updateGame(id, req.body, (err, result) => {
    if (err) {
      res.status(500).send('Update failed.');
    } else {
      res.status(200).send(result);
    }
  });
});

app.delete('/cartapi/:id', (req, res) => {
  const id = Number(path.basename(req.url));
  db.deleteGame(id, (err, result) => {
    if (err) {
      res.status(500).send('Unable to delete.');
    } else {
      res.status(200).send(result);
    }
  });
});


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
