const express = require('express')
const router = express.Router()
const Manufacturer = require('../models/Manufacturer.js')

router.use(express.urlencoded({
    extended:true
}))

// manufacturer routes
router.get('/consultar', ((req, res) => {
    res.render('consultManufacturerProducts')
}))

router.post('/register', (async (req, res) => {
    const name = req.body.name
    await Manufacturer.create({name})
    res.redirect('/')
}))

router.get('/registrar', ((req, res) => {
    res.render('registerManufacturer')
}))

module.exports = router