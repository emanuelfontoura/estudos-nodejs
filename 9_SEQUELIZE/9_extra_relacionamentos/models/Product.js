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
    price : {
        type : DataTypes.STRING
    },
    description : {
        type : DataTypes.STRING
    }
})

Product.hasMany(ProductManufacturer)
ProductManufacturer.belongsTo(Product)
Manufacturer.hasMany(ProductManufacturer)
ProductManufacturer.belongsTo(Manufacturer)

// Product.belongsToMany(Manufacturer, {
//     through : {
//         model : ProductManufacturer
//     }
// })

// Manufacturer.belongsToMany(Product, {
//     through : {
//         model : ProductManufacturer
//     }
// })

module.exports = Product