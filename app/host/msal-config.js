const config = {
    "credentials": {
        "tenantID": "96ece526-9c7d-48b0-8daf-8b93c90a5d18",
        "clientID": "415cac2f-e96a-4cac-b1ea-6340a94f472a",
        "audience": "415cac2f-e96a-4cac-b1ea-6340a94f472a"
    },
    "resource": {
        "scope": ["access_as_user"]
    },
    "metadata": {
        "authority": "login.microsoftonline.com",
        "discovery": ".well-known/openid-configuration",
        "version": "v2.0"
    },
    "settings": {
        "validateIssuer": true,
        "passReqToCallback": false,
        "loggingLevel": "info"
    }
}
const options = {
    identityMetadata: `https://${config.metadata.authority}/${config.credentials.tenantID}/${config.metadata.version}/${config.metadata.discovery}`,
    issuer: `https://${config.metadata.authority}/${config.credentials.tenantID}/${config.metadata.version}`,
    clientID: config.credentials.clientID,
    audience: config.credentials.audience,
    validateIssuer: config.settings.validateIssuer,
    passReqToCallback: config.settings.passReqToCallback,
    loggingLevel: config.settings.loggingLevel
  };

module.exports = {options}