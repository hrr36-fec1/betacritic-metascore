const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/metascore';

const db = mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.err(err));

module.exports = db;
