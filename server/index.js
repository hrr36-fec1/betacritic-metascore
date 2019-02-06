const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Movie = require('../database/Movie.js');
const Review = require('../database/Review.js');

const app = express();
const PORT = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(`${__dirname}/../public`)));

app.listen(PORT, () => {
  console.log(`Connected to Express on port ${PORT}`);
});
