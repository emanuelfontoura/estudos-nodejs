const { Sequelize } = require('sequelize')
require('dotenv').config()

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

const sequelize = new Sequelize(
    'jwt',
    DB_USER,
    DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

try{
    sequelize.authenticate()
}catch(err){
    console.log(err)
}

module.exports = sequelize