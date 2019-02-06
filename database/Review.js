const mongoose = require('mongoose');
const db = require('./index.js'); // eslint-disable-line no-unused-vars

mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  author: String,
  movieId: Number,
  movieName: String,
  publication: String,
  score: Number,
  publishDate: Date,
  body: String,
  author_movie: { type: String, index: { unique: true } },
});

const Review = mongoose.model('Review', reviewSchema);

const search = (movieId) => {
  movieId = Number(movieId);
  return Review.find({ movieId });
};

const create = (review) => {
  const toSave = new Review(review);
  return toSave.save();
};

module.exports = Review;
module.exports.search = search;
module.exports.create = create;
