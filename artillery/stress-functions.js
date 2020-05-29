const faker = require('faker');

var id = 10000003;

const generateHighId = (context, events, done) => {
  const reqId = Math.floor(Math.random() * (id - (id * 0.75))) + Math.floor(id * 0.75);
  context.vars.id = reqId;
  return done();
};

const generateLowId = (context, events, done) => {
  const reqId = Math.floor(Math.random() * (id * 0.75));
  context.vars.id = reqId;
  return done();
};

const generateNewGame = (context, events, done) => {
  const game = {
    "gameId": id,
    "title": faker.fake('{{company.catchPhraseAdjective}} {{company.bsNoun}}'),
    "publisher": faker.fake('{{company.companyName}}'),
    "reviewScore": Math.ceil(Math.random() * 5),
    "reviewCount": Math.ceil(Math.random() * 5000),
    "ageRating": Math.ceil(Math.random() * 6),
    "newPrice": 60,
    "usedPrice": Math.ceil(Math.random() * 55),
    "digitalPrice": Math.floor(Math.random() * (60 - 45 + 1) + 45),
    "storeLocation": faker.fake('{{address.streetAddress}} {{address.streetName}} {{address.city}}, {{address.state}}'),
    "inStock": faker.random.boolean(),
  }
  id++;
  context.vars.reqBod = JSON.stringify(game);
  return done();
};

module.exports = {
  generateHighId,
  generateLowId,
  generateNewGame,
}