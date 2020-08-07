const express = require('express')
const router = express.Router()

const faunadb = require('../../data')

router.get('/', async (req, res) => {

  try {
    const payload = await faunadb.getAllContestants()

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
  const contestant = req.body.contestant

  try {
    const payload = await faunadb.addContestant(contestant)

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
  const contestant = req.body.contestant

  try {
    const payload = await faunadb.updateContestant(contestant)

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