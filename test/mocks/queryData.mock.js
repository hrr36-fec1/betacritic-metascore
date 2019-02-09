import App from '../../client/src/App'
import reviews from '../../examples/reviews';
import _ from 'underscore';

jest
.spyOn(App.prototype, 'queryData')
.mockImplementation(function() {
  const testReviews = _.sortBy(reviews, 'score').reverse();
  this.setState({ reviews: testReviews });

  let scores = reviews.map(review => review.score);
  scores = _.sortBy(scores);
  this.setState({ scores })
});