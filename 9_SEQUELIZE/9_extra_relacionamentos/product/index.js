const express = require('express')
const router = express.Router()
const Product = require('../models/Product.js')
const Manufacturer = require('../models/Manufacturer.js')
const ProductManufacturer = require('../models/ProductManufacturer.js')

router.use(express.urlencoded({
    extended : true
}))

// product routes
router.post('/consult', (async (req, res) => {
    const productName = req.body.productName
    const productId = await Product.findOne({raw:true, where:{name:productName}})
    const manufacturers = await ProductManufacturer.findAll({raw:true, where:{
        productId:productId.id
    }, include:Manufacturer})
    const productData = await Product.findOne({raw:true, where:{name:productName}})
    const formattedData = manufacturers.map(item => ({
        id:item.id,
        createdAt:item.createdAt,
        updatedId:item.updatedId,
        productId:item.productId,
        manufacturerId:item.manufacturerId,
        manufacturer:{
            id:item['manufacturer.id'],
            name:item['manufacturer.name'],
            createdAt:item['manufacturer.createdAt'],
            updatedAt:item['manufacturer.updatedAt']
        }
    }))
    console.log(productData)
    console.log(formattedData)
    res.render('showConsultProcutsForManufacturer', {manufacturer:formattedData, productData})
}))

router.get('/consultar', ((req, res) => {
    res.render('consultProductsForManufacturer')
}))

router.post('/register', (async (req, res) => {
    const {name, price, description, manufacturerId} = req.body
    const product = await Product.create({name, price, description})
    await ProductManufacturer.create({productId: product.dataValues.id, manufacturerId})
    res.redirect('/')
}))

router.get('/registrar', (async (req, res) => {
    const manufacturerData = await Manufacturer.findAll({raw:true}) 
    manufacturerData.forEach(manufacturer => {
        manufacturer.name = manufacturer.name.toUpperCase()
    })
    res.render('registerProduct', {manufacturerData})
}))

module.exports = router