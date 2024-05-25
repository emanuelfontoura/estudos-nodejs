const { DataTypes } = require('sequelize')

const db = require('../db/conn.js')

const User = require('../models/User.js')

const Address = db.define('address', {
    street : {
        type : DataTypes.STRING,
        allowNull : false,
        required : true
    },
    number : {
        type : DataTypes.STRING,
        allowNull : true
    },
    city : {
        type : DataTypes.STRING,
        allowNull : false,
        required : true
    }
})

Address.belongsTo(User)

module.exports = Address