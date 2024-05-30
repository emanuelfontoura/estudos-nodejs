const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')

const ProductManufacturer = db.define('productManufacturer', {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    }
})

module.exports = ProductManufacturer