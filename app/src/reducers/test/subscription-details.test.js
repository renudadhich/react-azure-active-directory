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
 * System:       HIve_userInterface
 * Module Name:  reducers
 * Filename:     subscription-details.test.js
 * Language:     React.js
 *
 * History:
 * 2020-04-14   Creation of file
 *************************************************************  */
import subscriptionDetails, { intialState } from '../subscription-details';
import * as types from '../../actions/subscription-details/types';

describe('subscriptionDetails reducer', () => {
  it('should return the initial state', () => {
    expect(subscriptionDetails()).toEqual(intialState);
  });

  test('SUBSCRIPTON_DATA_SUCCESS', () => {
    const action = {
      type: types.SUBSCRIPTON_DATA_SUCCESS,
      payload: {},
    };
    expect(subscriptionDetails(intialState, action)).toEqual({
      ...intialState,
      subscribedData: action.payload,
    });
  });
});
