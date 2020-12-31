/* *********************************************************
 *            COPYRIGHT (c) 2020
 *               HONEYWELL INC.,
 *           ALL RIGHTS RESERVED
 *
 * This software is a copyrighted work and/or information protected as a
 * trade secret. Legal rights of Honeywell Inc. in this software are distinct
 * from ownership of any medium in which the software is embodied.
 * Copyright or trade secret notices included must be reproduced in
 * any copies authorized by Honeywell Inc.
 * The information in this software is subject to change without notice and
 * should not be considered as a commitment by Honeywell Inc.
 ************************************************************  */
/* **********************************************************
 * System:       Hive-interface
 * Module Name:  subscription-details
 * Filename:     index.test.js
 * Language:     React.js
 *
 * History:
 * 2020-04-14   Creation of file
 *************************************************************  */

import * as types from '../types';
import { setSubscribedData, deploySubscriptionData } from '../index';
import mockAdapter from 'axios-mock-adapter';
import configuremockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getCreateSubscriptionURL } from '../../../api/subscription-details';
import * as actions from '../../../actions/subscription-details';
import axios from 'axios';
import { RESPONSE_CODE } from '../../../constants/api';
const middlewares = [thunk];
const mockStore = configuremockStore(middlewares);
let mock = null;
describe('subscriptionDetails actions', () => {
  beforeEach(() => {
    mock = new mockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
    mock.reset();
  });
  test('SUBSCRIPTON_DATA_SUCCESS', () => {
    const expectedObj = {
      type: types.SUBSCRIPTON_DATA_SUCCESS,
      payload: {},
    };
    expect(setSubscribedData({})).toEqual(expectedObj);
  });
  test('create subscription with success', async () => {
    mock.onPost(getCreateSubscriptionURL()).reply(RESPONSE_CODE.SUCCESS);
    const spy = jest.spyOn(axios, 'post');
    spy.mockClear();
    const mockCallback = jest.fn();
    const store = mockStore({});

    return store.dispatch(actions.deploySubscriptionData({}, mockCallback)).then(() => {
      expect(spy).toBeCalledTimes(1);
      expect(mockCallback).toBeCalledTimes(1);
    });
  });
  test('create subscription with failure', async () => {
    mock.onPost(getCreateSubscriptionURL()).reply(RESPONSE_CODE.FAILURE);
    const spy = jest.spyOn(axios, 'post');
    spy.mockClear();
    const mockCallback = jest.fn();
    const store = mockStore({});

    return store.dispatch(actions.deploySubscriptionData({}, mockCallback)).then(() => {
      expect(spy).toBeCalledTimes(1);
      expect(mockCallback).toBeCalledTimes(1);
    });
  });
  test('create subscription with server error', async () => {
    mock.onPost(getCreateSubscriptionURL()).networkError();
    const spy = jest.spyOn(axios, 'post');
    spy.mockClear();
    const mockCallback = jest.fn();
    const store = mockStore({});

    return store.dispatch(actions.deploySubscriptionData({}, mockCallback)).then(() => {
      expect(spy).toBeCalledTimes(1);
      expect(mockCallback).toBeCalledTimes(1);
    });
  });
  test('create subscription with no content', async () => {
    mock.onPost(getCreateSubscriptionURL()).reply(RESPONSE_CODE.NO_CONTENT);
    const spy = jest.spyOn(axios, 'post');
    spy.mockClear();
    const mockCallback = jest.fn();
    const store = mockStore({});

    return store.dispatch(actions.deploySubscriptionData({}, mockCallback)).then(() => {
      expect(spy).toBeCalledTimes(1);
      expect(mockCallback).toBeCalledTimes(0);
    });
  });
});
