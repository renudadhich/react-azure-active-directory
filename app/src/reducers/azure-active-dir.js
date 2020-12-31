import * as types from '../actions/authentication/types';

const initialState = {
  isAuthenticated: false,
  user: null,
  idToken: null,
  accessToken: null,
  publicClient: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case types.SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case types.SET_LOGGED_IN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.SET_PUBLIC_CLIENT:
      return {
        ...state,
        publicClient: action.payload,
      };
    default:
      return state;
  }
};
