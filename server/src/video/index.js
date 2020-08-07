const express = require('express')
const router = express.Router()

const opentok = require('./opentok')
const fauna = require('../data')

/**
 * Identifies the video session associated with the room
 * @param room - A UUID (WID) that associates with an OpenTok Session Id 
 */
router.get('/:room', async (req, res) => {
  const room = req.params.room
  let session

  try {
    session = await fauna.getSession(room)
  }
  catch (err) {
    console.log(err)
  }

  if (session) {
    res.status(200).json(session)
  }

  res.status(404)
})

/**
 * Creates a new session with the provided room if it doesn't exist
 * @param room - A UUID (WID) that associates with an OpenTok Session Id 
 */
router.post('/:room', async (req, res) => {
  const room = req.params.room
  let session

  try {
    session = await fauna.getSession(room)
  }
  catch (err) {
    console.log(err)
    return res.status(404)
  }

  if (!session) {
    try {
      const otSession = await opentok.createSession()
      if (otSession) {
        session = await fauna.createSession({
          sessionId: otSession.id,
          room
        })
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  if (session) {
    res.status(200).json(session)
  }

  res.status(404)
})

/**
 * Generates and returns an OpenTok token for the user and the provided session id
 * @param sessionId - OpenTok session Id
 */
router.post('/token', async (req, res) => {
  const sessionId = req.body.sessionId

  let token

  try {
    const newToken = await opentok.createToken(sessionId)
    token = {
      token: newToken.token,
      sessionId
    }

    res.status(200).json(token)
  }
  catch (err) {
    console.log(err);
  }

  res.status(400)
})

module.exports = router