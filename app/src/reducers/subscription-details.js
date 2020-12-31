import * as types from '../actions/subscription-details/types';
export const intialState = {
  subscribedData: {},
};
export default (state = intialState, action = {}) => {
  switch (action.type) {
    case types.SUBSCRIPTON_DATA_SUCCESS:
      return {
        ...state,
        subscribedData: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
