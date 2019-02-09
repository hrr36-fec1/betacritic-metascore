import React from 'react';
import { shallow } from 'enzyme';
import _ from 'underscore';

import App from '../client/src/App';
import Metascore from '../client/src/components/Metascore';
import ReviewList from '../client/src/components/ReviewList';
import reviews from '../examples/reviews';


describe('App Unit Tests', () => {
  // mock queryData
  jest
    .spyOn(App.prototype, 'queryData')
    // eslint-disable-next-line func-names
    .mockImplementation(function () {
      const testReviews = _.sortBy(reviews, 'score').reverse();
      this.setState({ reviews: testReviews });

      let scores = reviews.map(review => review.score);
      scores = _.sortBy(scores);
      this.setState({ scores });
    });

  const wrapper = shallow(<App />);

  it('Should render a Metascore component', () => {
    expect(wrapper.find(Metascore)).toHaveLength(1);
  });

  it('Should render a ReviewList component', () => {
    expect(wrapper.find(ReviewList)).toHaveLength(1);
  });
});
