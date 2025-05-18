const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')

const User = db.define('users', {
    id: {
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username : {
        type : DataTypes.STRING,
        allowNull: false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    }
})

module.exports = User