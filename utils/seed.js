const Promise = require('bluebird');
const path = require('path');
const fs = Promise.promisifyAll(require('fs'));
const faker = require('faker');

// reads data from the imdb movie list and parses it into
// the movie id, the year the movie was released, and the titles via regex

const parseData = async (file) => {

  const data = await fs.readFileAsync(file, 'utf8');

  const idRegex = /([0-9]+)\.\s/g;
  const ids = data.match(idRegex).map(el => el.substring(0, el.length - 2));

  const yearRegex = /\([0-9]+\)/g;
  const years = data.match(yearRegex).map(el => el.substring(1, el.length - 1));

  const titleRegex = /\s(.)+\s/g;
  const titles = data.match(titleRegex).map(el => el.substring(1, el.length - 8));

  return { ids, years, titles };
};

// takes the movie data from parseData, and for each movie, creates a random number of reviews (between 25 and 75 reviews per movie). Returns an array of arrays, where the ith array contains the reviews for the ith movie in movies.

let generateReviews = async (movies) => {
  const movieReviews = [];
  for (let i = 0; i < 1; i++) {
    let movieReview = [];
    const numReviews = Math.floor(Math.random() * 50) + 25;
    for (let j = 0; j < numReviews; j++) {
      const author = `${faker.name.firstName()} ${faker.name.lastName()}`;
      const movie = movies[i];
      const publication = faker.company.companyName();
      const score = Math.floor(Math.random() * 100);
      const publishDate = faker.date.between(movies.years[i], '2019-01-01');
      const body = faker.lorem.paragraphs();
      const author_movie = `${author}_${movies.titles[i]}`
      movieReview.push({ author, movie, publication, score, publishDate, body, author_movie });
    }
    movieReviews.push(movieReview);
  }
  return movieReviews;
};

/* parseData(path.join((`${__dirname}/../imdb-movie-list.txt`)))
  .then(movies => generateReviews(movies));
*/
