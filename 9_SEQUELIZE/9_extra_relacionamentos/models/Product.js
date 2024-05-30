const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')
const ProductManufacturer = require('./ProductManufacturer.js')
const Manufacturer = require('./Manufacturer.js')

const Product = db.define('product', {
    id: {
        autoIncrement : true,
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true
    }, 
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    preco : {
        type : DataTypes.DECIMAL
    },
    descricao : {
        type : DataTypes.STRING
    }
})

Product.hasMany(ProductManufacturer)
ProductManufacturer.belongsTo(Product)
Manufacturer.hasMany(ProductManufacturer)
ProductManufacturer.belongsTo(Manufacturer)

module.exports = Product