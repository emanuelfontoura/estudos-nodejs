const { DataTypes } = require('sequelize')

const db = require('../db/conn.js')

const Employee = db.define('Employee', {
    name : {
        type : DataTypes.STRING
    },
    office : {
        type : DataTypes.STRING
    },
    age : {
        type : DataTypes.INTEGER
    }
})

module.exports = Employee