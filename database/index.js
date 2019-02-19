const mongoose = require('mongoose');
const Review = require('./Review.js');
const Movie = require('./Movie.js');

const mongoHostName = process.env.NODE_ENV === 'testing' ? 'test1' : 'test2';
const mongoUri = process.env.MONGODB_URI || 'mongodb://mongo:27017/metascore';
console.log('------------------DATABASE--------------------------');
const db = mongoose.connect(mongoUri, { useNewUrlParser: true })
  .then(() => console.log(`Connected to MongoDB on: ${mongoUri}`))
  .catch(err => console.log(`Error: ${err}`));
console.log('----------------------------------------------------');

module.exports = {
  db,
  Review,
  Movie,
};
