const express = require('express')
const router = express.Router()
const Product = require('../models/Product.js')
const Manufacturer = require('../models/Manufacturer.js')

router.use(express.urlencoded({
    extended : true
}))

// product routes
router.get('/consultar', ((req, res) => {
    res.render('consultProductsForManufacturer')
}))

router.post('/register', (async (req, res) => {
    const {name, price, description} = req.body

    await Product.create({name, price, description})

    res.redirect('/')
}))

router.get('/registrar', (async (req, res) => {
    const manufacturerData = await Manufacturer.findAll({raw:true}) 
    manufacturerData.forEach(manufacturer => {
        manufacturer.name = manufacturer.name.toUpperCase()
    })
    console.log(manufacturerData)
    res.render('registerProduct', {manufacturerData})
}))

module.exports = router