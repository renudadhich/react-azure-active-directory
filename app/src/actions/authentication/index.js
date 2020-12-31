import * as types from './types';

export const setIsAuthenticated = (isAuthenticated) => ({ type: types.SET_IS_AUTHENTICATED, payload: isAuthenticated });
export const setPublicClient = (client) => ({ type: types.SET_LOGGED_IN_USER, payload: client });
export const setLoggedInUser = (user) => ({ type: types.SET_LOGGED_IN_USER, payload: user });
export const setAccessToken = (token) => ({ type: types.SET_ACCESS_TOKEN, payload: token });
