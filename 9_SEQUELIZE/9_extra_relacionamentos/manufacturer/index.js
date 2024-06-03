const express = require('express')
const router = express.Router()
const Manufacturer = require('../models/Manufacturer.js')
const ProductManufacturer = require('../models/ProductManufacturer.js')
const Product = require('../models/Product.js')

router.use(express.urlencoded({
    extended:true
}))

// manufacturer routes
router.post('/consult', (async (req, res) => {
    const manufacturerName = req.body.name
    const manufacturer = await Manufacturer.findOne({where: {name:manufacturerName}})
    const products = await ProductManufacturer.findAll({raw:true, where: {manufacturerId:manufacturer.id}, include:Product})
    const formattedProducts = products.map(item => ({
        id: item.id,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        productId: item.productId,
        manufacturerId: item.manufacturerId,
        product: {
          id: item['product.id'],
          name: item['product.name'],
          price: item['product.price'],
          description: item['product.description'],
          createdAt: item['product.createdAt'],
          updatedAt: item['product.updatedAt']
        }
      }));
    res.render('showConsultManufacturerProducts', {products:formattedProducts})
}))

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