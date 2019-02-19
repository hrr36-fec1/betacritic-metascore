const mongoose = require('mongoose');
const Review = require('./Review.js');
const Movie = require('./Movie.js');

const mongoHostName = process.env.NODE_ENV === 'testing' ? 'localhost' : 'mongo';
const mongoUri = process.env.MONGODB_URI || `mongodb://${mongoHostName}:27017/metascore`;
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
