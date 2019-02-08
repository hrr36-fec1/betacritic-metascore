import React from 'react';
import { shallow } from 'enzyme';

import ReviewListItem from '../client/src/components/ReviewListItem.jsx';
import reviews from '../examples/reviews.js';

describe('ReviewListItem', function() {
  const wrapper = <ReviewListItem review={reviews[0]}/>;
  const wrapperMixed = <ReviewListItem review={reviews[1]}/>;
  const wrapperBad = <ReviewListItem review={reviews[2]}/>;

  it('should render without throwing an error', function() {
    const element = <a href="#" className="read_full">Read Full Review</a>;
    expect(shallow(wrapper).contains(element)).toBe(true);
  });

  it('should render integer scores only', function() {
    expect(shallow(wrapper).find('.metascore_w.header_size').text()).toBe('91')
  });

  it('should render nice dates', function() {
    expect(shallow(wrapper).find('.date').text()).toBe('Feb 9, 1985')
  });

  it('should update an element\'s class based on rating', function() {
    expect(shallow(wrapper).find('.movie.positive')).toHaveLength(1);
    expect(shallow(wrapperMixed).find('.movie.mixed')).toHaveLength(1);
    expect(shallow(wrapperBad).find('.movie.negative')).toHaveLength(1);
  });

});
