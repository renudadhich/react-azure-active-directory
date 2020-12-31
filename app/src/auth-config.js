export const msalConfig = {
  auth: {
    clientId: 'd1d423ba-2320-4c63-b87f-a191138744e2',
    authority: 'https://login.microsoftonline.com/96ece526-9c7d-48b0-8daf-8b93c90a5d18',  //https://login.microsoftonline.com/tenantID
    // redirectUri: 'https://testingad.azurewebsites.net',
    redirectUri:"http://localhost:3000"    //redirect uri ..it should be same as defined on the azure portal
  },
  cache: {
    cacheLocation: 'localStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.a
export const loginRequest = {
  scopes: ['openid', 'profile'],
  forceRefresh: false, // Set this to "true" to skip a cached token and go to the server to get a new token
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const apiRequest = {
  scopes: ['api://415cac2f-e96a-4cac-b1ea-6340a94f472a/submit'], // scope defined on azure portal on api side
  forceRefresh: false, // Set this to "true" to skip a cached token and go to the server to get a new token
};
