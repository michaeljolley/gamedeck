const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

const addVideoRoutes = require('./video')
const jwtCheck = require('./auth')

app.use(bodyParser.json())
app.use(jwtCheck)

app.use('/video', addVideoRoutes)

app.listen(port, () => console.log(`The super awesome Game Deck (server edition) listening at http://localhost:${port}`))