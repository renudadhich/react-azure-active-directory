import React from 'react';
import { shallow } from 'enzyme';
import LandingDashboard from '../index';
jest.mock('../../../utils/authentication', () => ({ login: jest.fn(), logout: jest.fn() }));

describe('LandingDashboard', () => {
  test('LandingDashboard component  exist', () => {
    const wrapper = shallow(<LandingDashboard />);
    expect(wrapper.exists()).toEqual(true);
  });
});
