import React from 'react';
import { mount } from 'enzyme';
import Login, { Unauthorized } from '../index';
import { Provider } from 'react-redux';
import configureStore from '../../../store/configure-store';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();

const renderComponent = (Component, props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Component {...props} />
      </BrowserRouter>
    </Provider>
  );
};
describe('Unauthorized', () => {
  const testContext = {};
  beforeEach(() => {
    testContext.props = {
      isAuthenticated: false,
      history: { push: jest.fn() },
    };
  });
  test('Unauthorized component  exist', () => {
    const wrapper = mount(renderComponent(Login, testContext.props));
    expect(wrapper.exists()).toEqual(true);
  });
  test('Unauthorized component  exist when authenticated', () => {
    const wrapper = mount(renderComponent(Login, { ...testContext.props }));
    store.getState().azureAD.isAuthenticated = true;
    expect(wrapper.exists()).toEqual(true);
  });
  test('Unauthorized component  exist', () => {
    const wrapper = mount(renderComponent(Unauthorized, { ...testContext.props, isAuthenticated: true }));
    expect(wrapper.exists()).toEqual(true);
  });
});
