import React from 'react';
import { shallow } from 'enzyme';

import ReviewListItem from '../client/src/components/ReviewListItem.jsx';
import reviews from '../examples/reviews.js';

describe('ReviewListItem', function() {
  const wrapper = shallow(<ReviewListItem review={reviews[0]}/>);
  const wrapperMixed = shallow(<ReviewListItem review={reviews[1]}/>);
  const wrapperBad = shallow(<ReviewListItem review={reviews[2]}/>);

  it('should render without throwing an error', function() {
    const element = <a href="#" className="read_full">Read Full Review</a>;
    expect(wrapper.contains(element)).toBe(true);
  });

  it('should render integer scores only', function() {
    expect(wrapper.find('.metascore_w.header_size').text()).toBe('91')
  });

  it('should render nice dates', function() {
    expect(wrapper.find('.date').text()).toBe('Feb 9, 1985')
  });

  it('should update an element\'s class based on rating', function() {
    expect(wrapper.find('.movie.positive')).toHaveLength(1);
    expect(wrapperMixed.find('.movie.mixed')).toHaveLength(1);
    expect(wrapperBad.find('.movie.negative')).toHaveLength(1);
  });

});
