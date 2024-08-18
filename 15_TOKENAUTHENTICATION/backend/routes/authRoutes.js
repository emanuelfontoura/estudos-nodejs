const express = require('express')
const AuthController = require('../controllers/AuthController.js')
const router = express.Router()

router.post('/', AuthController.loginPost)
router.post('/create', AuthController.createLoginPost)

module.exports = router