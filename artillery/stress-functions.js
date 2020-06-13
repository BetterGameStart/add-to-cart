const faker = require('faker');

var id = 10336801;

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
  context.vars.gameId = id;
  context.vars.title = faker.fake('{{company.catchPhraseAdjective}} {{company.bsNoun}}');
  context.vars.publisher = faker.fake('{{company.companyName}}');
  context.vars.reviewScore = Math.ceil(Math.random() * 5);
  context.vars.reviewCount = Math.ceil(Math.random() * 5000);
  context.vars.ageRating = Math.ceil(Math.random() * 6);
  context.vars.newPrice = 60;
  context.vars.usedPrice = Math.ceil(Math.random() * 55);
  context.vars.digitalPrice = Math.floor(Math.random() * (60 - 45 + 1) + 45);
  context.vars.storeLocation = faker.fake('{{address.streetAddress}} {{address.streetName}} {{address.city}}, {{address.state}}');
  context.vars.inStock = faker.random.boolean();

  id++;

  return done();
};

module.exports = {
  generateHighId,
  generateLowId,
  generateNewGame,
}