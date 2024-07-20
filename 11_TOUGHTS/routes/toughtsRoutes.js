const express = require('express')
const router = express.Router()
const ToughtController = require('../controllers/ToughtController.js')

// auth helper
const checkAuth = require('../helpers/auth.js').checkAuth

router.get('/', ToughtController.showToughts)
router.get('/dashboard', checkAuth, ToughtController.dashboard)
router.get('/add', checkAuth, ToughtController.createTought)
router.post('/add', checkAuth, ToughtController.createToughtSave)
router.get('/edit/:id', ToughtController.editTought)

module.exports = router