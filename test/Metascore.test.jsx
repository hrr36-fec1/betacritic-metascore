import React from 'react';
import { shallow, render, mount } from 'enzyme';

import Metascore from '../client/src/components/Metascore';
import ChartWrapper from '../client/src/components/ChartWrapper';

import scores from '../examples/scores';

describe('Metascore', function() {
  const wrapper = mount(<Metascore scores={scores} />)

  it('should render three bar types', function() {
    expect(wrapper.find(ChartWrapper)).toHaveLength(3);
    expect(wrapper.find({ type: 'positive' })).toHaveLength(1);
    expect(wrapper.find({ type: 'mixed' })).toHaveLength(1);
    expect(wrapper.find({ type: 'negative' })).toHaveLength(1);
  });

  it('should filter reviews appropriately', function() {
    expect(wrapper.find({ type: 'positive' }).prop('reviews')).toBe(1);
    expect(wrapper.find({ type: 'mixed' }).prop('reviews')).toBe(1);
    expect(wrapper.find({ type: 'negative' }).prop('reviews')).toBe(2);
  });

  it('should render proper lengths for the ChartWrappers', function() {
    expect(wrapper.find({ type: 'positive' }).prop('length')).toBe(0.5);
    expect(wrapper.find({ type: 'mixed' }).prop('length')).toBe(0.5);
    expect(wrapper.find({ type: 'negative' }).prop('length')).toBe(1);
  });

  it('should render an integral metascore (not decimal)', function() {
    expect(wrapper.find('.metascore_w').text()).toBe('42');
  });

});
