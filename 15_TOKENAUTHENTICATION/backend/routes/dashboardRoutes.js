const express = require('express')
const DashboardController = require('../controllers/DashboardController')
const AuthController = require('../controllers/AuthController.js')
const router = express.Router()

router.get('/dashboard', AuthController.verifyToken, DashboardController.authentication)

module.exports = router