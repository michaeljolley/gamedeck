const dotenv = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3001

dotenv.config()

const addSessionRoutes = require('./routes/sessions')
const addChallengesRoutes = require('./routes/challenges')
const addContestantsRoutes = require('./routes/contestants')
const jwtCheck = require('./plugins/auth')

var corsOptions = {
  origin: process.env.GAMEDECK_CLIENT_URL,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.json())
app.use(jwtCheck)
app.use(cors(corsOptions))

app.use('/sessions', addSessionRoutes)
app.use('/challenges', addChallengesRoutes)
app.use('/contestants', addContestantsRoutes)

app.listen(port, () => console.log(`The super awesome Game Deck (server edition) listening at http://localhost:${port}`))