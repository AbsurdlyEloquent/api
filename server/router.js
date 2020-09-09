const express = require('express')
const controller = require('../db/controller/project')

const router = new express.Router()

router.get('/', controller.index)
router.get('/:lang?', controller.byLang)
router.get('/:name?', controller.byName)

module.exports = router
