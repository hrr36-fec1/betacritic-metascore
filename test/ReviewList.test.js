import React from 'react';
import { shallow } from 'enzyme';

import ReviewList from '../client/src/components/ReviewList.jsx';
import ReviewListItem from '../client/src/components/ReviewListItem.jsx';
import reviews from '../examples/reviews.js';

describe('ReviewList', function() {
  const wrapper = <ReviewList reviews={reviews}/>;

  it('should render without throwing an error', function() {
    const element = <a href="#">Critic Reviews</a>;
    expect(shallow(wrapper).contains(element)).toBe(true);
  });

  it('should render several ReviewListItem components', function() {
    expect(shallow(wrapper).find(ReviewListItem)).toHaveLength(4);
  });
});
