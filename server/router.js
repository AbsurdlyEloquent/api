const express = require('express')
const controller = require('../db/controller/project')

const router = new express.Router()

router.get('/?', controller.index)
router.get('/:id', controller.read)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router
