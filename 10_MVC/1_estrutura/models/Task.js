const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')

const Task = db.define('task', {
    id: {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    title : {
        type : DataTypes.STRING,
        required : true
    },
    description : {
        type : DataTypes.STRING,
        required : true
    },
    done : {
        type : DataTypes.BOOLEAN,
        required : true
    }
})

module.exports = Task