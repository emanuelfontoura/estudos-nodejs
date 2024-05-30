const express = require('express')
const router = express.Router()

// manufacturer routes
router.get('/consultar', ((req, res) => {
    res.render('consultManufacturerProducts')
}))

router.get('/cadastrar', ((req, res) => {
    res.render('registerManufacturer')
}))

module.exports = router