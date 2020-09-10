const express = require('express')
const controller = require('../db/controller/project')

const router = new express.Router()

router.get('/', controller.index)
router.get('/q?', controller.byProp)
router.post('/:name/p?', controller.postRepo)
router.put('/:name/p?', controller.putRepo)
router.delete('/:name', controller.delete)

module.exports = router
