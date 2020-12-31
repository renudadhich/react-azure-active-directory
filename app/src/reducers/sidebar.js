import * as types from '../actions/sidebar/types';

const initialState = {
  isCollapsed: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDEBAR:
      return {
        ...state,
        isCollapsed: action.payload,
      };
    default:
      return state;
  }
};
