const express = require('express')
const router = express.Router()

const faunadb = require('../../data')

router.get('/', async (req, res) => {

  try {
    const payload = await faunadb.getAllChallenges()

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
  const challenge = req.body.challenge

  try {
    const payload = await faunadb.addChallenge(challenge)

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
  const challenge = req.body.challenge

  try {
    const payload = await faunadb.updateChallenge(challenge)

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
    const payload = await faunadb.deleteChallenge(req.params.id)

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