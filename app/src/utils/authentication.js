import * as msal from '@azure/msal-browser';
import { msalConfig } from '../auth-config';
import { setAccessToken, setIsAuthenticated, setLoggedInUser, setPublicClient } from '../actions/authentication/index';
import { store } from '../App';
import {initRestAPI} from '../api/interceptor-init';
let publicClient,username;

export const initMsalConfig = () => {
  publicClient = new msal.PublicClientApplication(msalConfig);
  setPublicClient(publicClient);

  publicClient
    .handleRedirectPromise()
    .then((response) => {
      if (response) {
        store.dispatch(setLoggedInUser(response.account));
        username = response.account.username;
        store.dispatch(setIsAuthenticated(true));
        if (response.accessToken) {
          store.dispatch(setAccessToken(response.accessToken));
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
export const login = async (loginRequest, method) => {
  if (method === 'loginPopup') {
    try {
      const response = await publicClient.loginPopup(loginRequest);
      username = response.account.username;
      store.dispatch(setLoggedInUser(response.account));
      store.dispatch(setIsAuthenticated(true));
      store.dispatch(setAccessToken(response.accessToken));
    } catch (error) {
      console.log(error);
    } finally {
    }
  } else if (method === 'loginRedirect') {
    publicClient.loginRedirect(loginRequest);
  }
};

export const logout = () => {
  publicClient.logout();
};

export const getTokenPopup = async (loginRequest) => {
  loginRequest.account = publicClient.getAccountByUsername(username);
  try {
    const response = await publicClient.acquireTokenSilent(loginRequest);
    return response.accessToken;
  } catch (error) {
    try {
      const response = await publicClient.acquireTokenPopup(loginRequest);
      return response.accessToken;
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
};

export const getTokenRedirect = async (loginRequest) => {
  loginRequest.account = publicClient.getAccountByUsername(username);
  try {
    const response = await publicClient.acquireTokenSilent(loginRequest);
    return response.accessToken;
  } catch (error) {
    try {
      const response = publicClient.acquireTokenRedirect(loginRequest);
      return response.accessToken;
    } catch (error) {
      console.log(error);
    }
  }
};

export const getToken = async (loginRequest, method) => {
  let token;
  if (method === 'loginRedirect') {
    token = await getTokenRedirect(loginRequest);
  } else {
    token = await getTokenPopup(loginRequest);
  }
  return token;
};
export const intializAuthProcess = () =>{
 initMsalConfig();
 initRestAPI();
}
