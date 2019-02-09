import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/App';
import Metascore from '../client/src/components/Metascore';
import ReviewList from '../client/src/components/ReviewList';
// eslint-disable-next-line
import queryDataMock from './mocks/queryData.mock.js';

describe('App Unit Tests', () => {
  const wrapper = shallow(<App />);

  it('Should render a Metascore component', () => {
    expect(wrapper.find(Metascore)).toHaveLength(1);
  });

  it('Should render a ReviewList component', () => {
    expect(wrapper.find(ReviewList)).toHaveLength(1);
  });
});
