import React from 'react';
import { mount } from 'enzyme';

import App from '../client/src/App';
import Metascore from '../client/src/components/Metascore';
import ReviewList from '../client/src/components/ReviewList';

describe('App', function() {
  const wrapper = mount(<App />);

  it('Should render a Metascore component', function() {
    expect(wrapper.find(Metascore)).toHaveLength(1);
  });

  it('Should render a ReviewList component', function() {
    expect(wrapper.find(ReviewList)).toHaveLength(1);
  });
});
