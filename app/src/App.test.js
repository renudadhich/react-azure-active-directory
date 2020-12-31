import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
describe('APP', () => {
  test('APP component  exist', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
});
