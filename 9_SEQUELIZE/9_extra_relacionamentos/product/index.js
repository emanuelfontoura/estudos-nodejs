const express = require('express')
const router = express.Router()

router.get('/consultar', ((req, res) => {
    res.render('consultAllProductsOfManufacturer')
}))

router.get('/cadastrar', ((req, res) => {
    res.render('registerProduct')
}))

module.exports = router