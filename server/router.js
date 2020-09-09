const express = require('express')
const controller = require('../db/controller/project')

const router = new express.Router()

router.get('/', controller.index)

module.exports = router
