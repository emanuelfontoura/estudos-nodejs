const express = require('express')
const router = express.Router()

// product routes
router.get('/consultar', ((req, res) => {
    res.render('consultProductsForManufacturer')
}))

router.get('/cadastrar', ((req, res) => {
    res.render('registerProduct')
}))

module.exports = router