const fs = require('fs');
const faker = require('faker');

var start = new Date().getTime();
const writeData = fs.createWriteStream('data.csv');
writeData.write('gameId,title,publisher,reviewScore,reviewCount,ageRating,newPrice,usedPrice,digitalPrice,storeLocation,inStock\n', 'utf8');

function writeTenMillionRecords(writer, encoding, callback) {
  let i = 10;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;

      const gameId = id;
      const title = faker.fake('{{company.catchPhraseAdjective}} {{company.bsNoun}}');
      const publisher = faker.fake('{{company.companyName}}');
      const reviewScore = Math.ceil(Math.random() * 5);
      const reviewCount = Math.ceil(Math.random() * 5000);
      const ageRating = Math.ceil(Math.random() * 6); //E, E10+, T, M, A, RP
      const newPrice = 60;
      const usedPrice = Math.ceil(Math.random() * 55);
      const digitalPrice = Math.floor(Math.random() * (60 - 45 + 1) + 45);
      const storeLocation = faker.fake('{{address.streetAddress}} {{address.streetName}} {{address.city}}, {{address.state}}');
      const inStock = faker.random.boolean();

      const data = `${gameId}, "${title}", "${publisher}", ${reviewScore}, ${reviewCount}, ${ageRating}, ${newPrice}, ${usedPrice}, ${digitalPrice}, "${storeLocation}", ${inStock}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionRecords(writeData, 'utf-8', () => {
  writeData.end();
  const elapsed = new Date().getTime() - start;
  console.log('All finished! Duration (ms): ', elapsed);
});




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
//   storeLocation varchar(80),
//   inStock boolean
// );
// // To copy the contents of the csv into the games table
// COPY games(gameId, title, publisher, reviewScore, reviewCount, ageRating, newPrice, usedPrice, digitalPrice, storeLocation, inStock)
// FROM '/home/geophreigh/Documents/Hack-Reactor/sdc/add-to-cart/db/postgres/data-test.csv' DELIMITER ',' CSV HEADER;
