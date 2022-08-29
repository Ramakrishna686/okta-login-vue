const { CLIENT_ID, ISSUER, OKTA_TESTING_DISABLEHTTPSCHECK } = process.env

const BASENAME = process.env.NODE_ENV === 'production' ? '/okta-hosted-login' : '';
const REDIRECT_URI = `${window.location.origin}${BASENAME}/login/callback`;
console.log(REDIRECT_URI, '---REDIRECT_URI--');

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    testing: {
      disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
    }
  },
  resourceServer: {
    messagesUrl: 'http://localhost:5000/api/messages'
  },
  app: {
    basename: BASENAME
  }
}
