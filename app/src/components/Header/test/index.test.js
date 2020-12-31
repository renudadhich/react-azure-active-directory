import React from 'react';
import HeaderContext from '../index.js';
import {mount,shallow} from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../store/configure-store';
import {AppHeader} from '../index.js';
import {toggleSidebarMenu} from '../../../actions/sidebar';
import {Header,Button} from '@scuf/common';
import {login} from '../../../utils/authentication';
const store = configureStore();
jest.mock('../../../utils/authentication', () => ({ login: jest.fn(), logout: jest.fn() }));
jest.mock('../../../actions/sidebar', () => ({
    toggleSidebarMenu: jest.fn(() => {
      // Mock method
      
    }),
  }));
const renderComponent = (Component, props) => {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  };
  describe('HeaderContext', () => {
    const testContext = {};
    beforeEach(() => {
    testContext.props = {
      isAuthenticated:false, 
      toggleSidebarMenu, 
      isCollapsed:true
        }
    });
    test('HeaderContext component  exist without authenticated!', () => {
      const wrapper = mount(renderComponent(HeaderContext, testContext.props));
      expect(wrapper.exists()).toEqual(true);
    });
    test('HeaderContext component  exist', () => {
        const wrapper = mount(renderComponent(HeaderContext, {...testContext.props,isAuthenticated:true,isCollapsed:false}));
        expect(wrapper.exists()).toEqual(true);
      });

    test('When user clicks on hamburger menu to expand sidebar', () => {
        const wrapper = shallow(<AppHeader {...testContext.props} />);
        wrapper.find(Header).props().onMenuToggle();
        wrapper.update();
        expect(toggleSidebarMenu).toHaveBeenCalledTimes(1);
        expect(store.getState().SideBar.isCollapsed).toEqual(false);
    
      });
      test('When user clicks on login button', () => {
        const wrapper = shallow(<AppHeader {...testContext.props} />);
        wrapper.find(Button).props().onClick();
        wrapper.update();
        expect(login).toHaveBeenCalledTimes(1);
      });

      test('When user clicks on hamburger menu for transitions', () => {
        const wrapper = shallow(<AppHeader {...testContext.props} />);
        wrapper.find(Header).props().onHeaderTransition({collapsed:true,compressed:true});
        wrapper.update();
        expect(toggleSidebarMenu).toHaveBeenCalledTimes(2);
        expect(toggleSidebarMenu).toHaveBeenCalledWith(true);
       });
       test('When user clicks on hamburger menu with no data collapsed', () => {
        const wrapper = shallow(<AppHeader {...testContext.props} />);
        wrapper.find(Header).props().onHeaderTransition({collapsed:false,compressed:false});
        wrapper.update();
        expect(toggleSidebarMenu).toHaveBeenCalledTimes(2);
       
       });
});