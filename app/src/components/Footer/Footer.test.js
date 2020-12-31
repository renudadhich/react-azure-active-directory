import React from 'react';
import { shallow } from 'enzyme';
import AppFooter from './index';

describe('AppFooter', () => {
  test('AppFooter component  exist', () => {
    const wrapper = shallow(<AppFooter />);
    expect(wrapper.exists()).toEqual(true);
  });
});
