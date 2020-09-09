const express = require('express')
const controller = require('../db/controller/project')

const router = new express.Router()

/* @api {get} /user/id: */
router.get('/', controller.index)
/* @api {get} '/q?name=$NAME' or '/q?lang=$LANG'
 * finds projects based on name or language */
router.get('/q?', controller.byName)

module.exports = router
