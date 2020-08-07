const express = require('express')
const router = express.Router()

const faunadb = require('../../data')

router.get('/', async (req, res) => {

  try {
    const payload = await faunadb.getAllSessions()

    if (payload) {
      res.status(200).json(payload)
    }
  }
  catch (err) {
    console.log(err)
  }
  res.status(404)
})

router.post('/', async (req, res) => {
  const session = req.body.session

  try {
    const payload = await faunadb.addSession(session)

    if (payload) {
      res.status(200).json(payload)
    }
  }
  catch (err) {
    console.log(err)
  }
  res.status(404)
})

router.put('/', async (req, res) => {
  const session = req.body.session

  try {
    const payload = await faunadb.updateSession(session)

    if (payload) {
      res.status(200).json(payload)
    }
  }
  catch (err) {
    console.log(err)
  }
  res.status(404)
})

router.delete('/:id', async (req, res) => {

  try {
    const payload = await faunadb.deleteSession(req.params.id)

    if (payload) {
      res.status(200).json(payload)
    }
  }
  catch (err) {
    console.log(err)
  }
  res.status(404)
})

module.exports = router