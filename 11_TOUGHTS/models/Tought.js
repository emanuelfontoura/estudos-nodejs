const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')
const User = require('./User.js')

const Tought = db.define('Tought', {
    title:{
        type: DataTypes.STRING,
        allowNull : false,
        required : true
    }
})

Tought.belongsTo(User)
User.hasMany(Tought)

module.exports = Tought