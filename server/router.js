const express = require('express')
const Project = require('../db/models/Project')

const router = new express.Router()

router.get('/', (req, res)=> {
  console.log('recieved')
  res.send("YES!")
})

module.exports = router
