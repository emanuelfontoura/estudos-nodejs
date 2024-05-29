const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')

const Manufacturer = db.define('manufacturer', {
    id: {
        autoIncrement : true,
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    }
})

module.exports = Manufacturer