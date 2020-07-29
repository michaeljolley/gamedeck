const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000;

const addVideoRoutes = require('./video')

app.use(bodyParser.json())

app.use('/video', addVideoRoutes)

app.listen(port, () => console.log(`The super awesome Game Deck (server edition) listening at http://localhost:${port}`))