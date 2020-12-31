import React from 'react';
import { shallow } from 'enzyme';
import LicenseDetails from '../index';
import { Input, Button } from '@scuf/common';

describe('LicenseDetails', () => {
  test('LicenseDetails component  exist', () => {
    const wrapper = shallow(<LicenseDetails />);
    expect(wrapper.exists()).toEqual(true);
  });

  test('When user changes input text value', () => {
    const inputTextValue = 'deviceID';
    const wrapper = shallow(<LicenseDetails />);
    expect(wrapper.find(Input).at(0).props().value).toBe('');
    wrapper.find(Input).at(0).props().onChange(inputTextValue);
    wrapper.update();
    expect(wrapper.find(Input).at(0).props().value).toBe(inputTextValue);
  });

  test('When user changes input text value with not allowed character', () => {
    const inputTextValue = 'freetext@';

    const wrapper = shallow(<LicenseDetails />);
    expect(wrapper.find(Input).at(0).props().value).toBe('');
    wrapper.find(Input).at(0).props().onChange(inputTextValue);
    wrapper.update();
    expect(wrapper.find(Input).at(0).props().value).toBe('');
  });
  test('When user changes input text value with empty', () => {
    const inputTextValue = '';
    const wrapper = shallow(<LicenseDetails />);
    expect(wrapper.find(Input).at(0).props().value).toBe('');
    wrapper.find(Input).at(0).props().onChange(inputTextValue);
    wrapper.update();
    expect(wrapper.find(Input).at(0).props().value).toBe(inputTextValue);
  });

  test('When user clicks on Save button with empty inputs', () => {
    const wrapper = shallow(<LicenseDetails />);
    wrapper.find(Button).props().onClick();
    wrapper.update();
  });
});
