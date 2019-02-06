const mongoose = require('mongoose');
const db = require('./index.js'); // eslint-disable-line no-unused-vars

mongoose.Promise = global.Promise;

const movieSchema = new mongoose.Schema({
  id: { type: Number, index: { unique: true } },
  title: String,
  releaseDate: Date,
  reviews: Array,
});

const Movie = mongoose.model('Movie', movieSchema);

const find = () => {

};

const create = (movie) => {

};

module.exports = Movie;
module.exports.find = find;
module.exports.create = create;
