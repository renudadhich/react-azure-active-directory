import React from 'react';
import { shallow, mount } from 'enzyme';
import { SubscriptionDetails } from '../index';
import { Provider } from 'react-redux';
import configureStore from '../../../store/configure-store';
import { Button } from '@scuf/common';
import { deploySubscriptionData } from '../../../actions/subscription-details';
const store = configureStore();
jest.mock('../../../actions/subscription-details', () => ({
  deploySubscriptionData: jest.fn((formaData, onCreateSuccess) => {
    // Mock method
    onCreateSuccess('msg');
  }),
}));

const renderComponent = (Component, props) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};
describe('SubscriptionDetails', () => {
  const testContext = {};
  beforeEach(() => {
    testContext.props = {
      deploySubscriptionData,
    };
  });
  test('SubscriptionDetails component  exist', () => {
    const wrapper = mount(renderComponent(SubscriptionDetails, testContext.props));
    expect(wrapper.exists()).toEqual(true);
  });
  test('When user changes input text value', () => {
    const inputTextValue = 'freetext';

    const wrapper = mount(renderComponent(SubscriptionDetails, testContext.props));
    expect(wrapper.find('input').at(0).getDOMNode().value).toBe('');
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: inputTextValue } });
    wrapper.update();
    expect(wrapper.find('input').at(0).getDOMNode().value).toBe(inputTextValue);
  });

  test('When user changes input text value with not allowed character', () => {
    const inputTextValue = 'freetext@';

    const wrapper = mount(renderComponent(SubscriptionDetails, testContext.props));
    expect(wrapper.find('input').at(0).getDOMNode().value).toBe('');
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: inputTextValue } });
    wrapper.update();
    expect(wrapper.find('input').at(0).getDOMNode().value).toBe('');
  });
  test('When user changes input text value with empty', () => {
    const inputTextValue = '';
    const wrapper = mount(renderComponent(SubscriptionDetails, testContext.props));
    expect(wrapper.find('input').at(0).getDOMNode().value).toBe('');
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: inputTextValue } });
    wrapper.update();
    expect(wrapper.find('input').at(0).getDOMNode().value).toBe(inputTextValue);
  });

  test('When user clicks on create button with empty inputs', () => {
    const wrapper = shallow(<SubscriptionDetails {...testContext.props} />);
    wrapper.find(Button).props().onClick();
    wrapper.update();
    expect(deploySubscriptionData).toHaveBeenCalledTimes(0);
  });

  test('When user clicks on create button with input values', () => {
    const inputTextValue = 'honeywellsystem';
    const inputNumber = '3';
    const wrapper = mount(<SubscriptionDetails {...testContext.props} />);
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: inputTextValue } });
    wrapper
      .find('input')
      .at(1)
      .simulate('change', { target: { value: inputTextValue } });
    wrapper
      .find('input')
      .at(2)
      .simulate('change', { target: { value: inputTextValue } });
    wrapper
      .find('input')
      .at(3)
      .simulate('change', { target: { value: inputTextValue } });
    wrapper
      .find('input')
      .at(4)
      .simulate('change', { target: { value: inputNumber } });
    wrapper
      .find('input')
      .at(5)
      .simulate('change', { target: { value: inputNumber } });
    wrapper.find('button').at(0).simulate('click');
    wrapper.update();
    expect(deploySubscriptionData).toHaveBeenCalledTimes(1);
  });
});
