const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const app = express()
const port = 3001;

const addVideoRoutes = require('./video')

app.use(bodyParser.json())

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://gamedeck.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://GameDeckWut/',
  issuer: 'https://gamedeck.us.auth0.com/',
  algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/api/authorized', function (req, res) {
  console.dir(req.user)
  res.status(200).json('Secured Resource');
});

app.use('/video', addVideoRoutes)

app.listen(port, () => console.log(`The super awesome Game Deck (server edition) listening at http://localhost:${port}`))