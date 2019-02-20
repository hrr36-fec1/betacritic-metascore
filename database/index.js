const mongoose = require('mongoose');
const Review = require('./Review.js');
const Movie = require('./Movie.js');

const prodConn = `mongodb://${process.env.MLABUN}:${process.env.MLABPW}@ds237955.mlab.com:37955/metascore`;
const devConn = 'mongodb://localhost:27017/metascore';
const mongoUri = process.env.NODE_ENV === 'dev' ? devConn : prodConn;

console.log(mongoUri);
console.log('--------------DATABASE START-------------------');
const db = mongoose.connect(mongoUri, { useNewUrlParser: true })
  .then(() => console.log(`Connected to MongoDB on: ${mongoUri}`))
  .catch(err => console.log(`Error: ${err}`));

module.exports = {
  db,
  Review,
  Movie,
};
