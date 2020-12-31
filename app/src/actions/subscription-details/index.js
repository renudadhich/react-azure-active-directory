import * as types from './types';
import axios from 'axios';
import { getCreateSubscriptionURL ,getApiDataURl} from '../../api/subscription-details';
export const setSubscribedData = (data) => ({ type: types.SUBSCRIPTON_DATA_SUCCESS, payload: data });
export const deploySubscriptionData = (formData, onSuccess) => async (dispatch) => {
  try {
    const { status, data } = await axios.post(getCreateSubscriptionURL(), formData);
    if (status === 200) {
      onSuccess(data);
    }
  } catch (error) {
    let errorMsg;
    if (error.response) {
      errorMsg = error.response;
    } else if (error.message) {
      errorMsg = error.message;
    }
    onSuccess(errorMsg, false);
  }
};
export const getApiData = ()=> async ()=> {
 try{
   const {data,status} = await axios.get(getApiDataURl());
   alert("data returned from api"+ JSON.stringify(data));
   console.log("data returned from api",JSON.stringify(data));
    if(status ===304) {
      alert("data returned from api",JSON.stringify(data));
    }
 }
 catch(error) {
   console.log("error from get api");
 }
}
