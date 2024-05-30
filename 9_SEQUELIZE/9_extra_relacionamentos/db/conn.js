const { Sequelize } = require('sequelize')

// connection with db
const db = new Sequelize(
    'commerce',
    'root',
    '1909',
    {
        host : 'localhost',
        dialect : 'mysql'
    }
)

module.exports = db