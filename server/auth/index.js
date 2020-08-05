const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

export const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://gamedeck.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://GameDeckWut/',
  issuer: 'https://gamedeck.us.auth0.com/',
  algorithms: ['RS256']
})