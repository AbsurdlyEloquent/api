const express = require('express')
const controller = require('../db/controller/project')

const router = new express.Router()

router.get('/', controller.index)
router.get('/q?', controller.byProp)
router.post('/:name/p?', controller.postRepo)

module.exports = router
