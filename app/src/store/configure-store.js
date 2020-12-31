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
 * System:       Hive-Interface
 * Module Name:  store
 * Filename:     configureStore.js
 * Language:     React.js
 *
 * History:
 * 2020-04-09   Creation of file
 *************************************************************  */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import * as appReducers from '../reducers';

const appReducer = combineReducers({ ...appReducers });

export default () => {
  return createStore(
    appReducer,
    applyMiddleware(reduxThunk),
  );
};
