const express = require('express')
const controller = require('../db/controller/project')

const router = new express.Router()

router.get('/', controller.index)
router.get('/search?', controller.byProp)
router.post('/', controller.postRepo)
router.put('/', controller.putRepo)
router.delete('/:name', controller.delete)

module.exports = router
