const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')

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

module.exports = Product