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

  const session = await fauna.getSession(room)

  if (session) {
    res.json(200, {
      sessionId: session.id,
      room
    })
  }

  res.send(404)
})

/**
 * Creates a new session with the provided room if it doesn't exist
 * @param room - A UUID (WID) that associates with an OpenTok Session Id 
 */
router.post('/:room', async (req, res) => {
  const room = req.params.room
  let session = await fauna.getSession(room)

  if (!session) {
    const otSession = await opentok.createSession()
    session = {
      sessionId: otSession.id,
      room
    }
    session = await fauna.createSession(session)
  }

  res.json(200, {
    sessionId: session.id,
    room
  })
})

/**
 * Generates and returns an OpenTok token for the user and the provided session id
 * @param sessionId - OpenTok session Id
 */
router.post('/token', (req, res) => {
  const sessionId = req.body.sessionId





})

module.exports = router