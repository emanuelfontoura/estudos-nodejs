const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'nodesequelize2',
    'root',
    '1909',
    {
        host : 'localhost',
        dialect : 'mysql'
    }
)

module.exports = sequelize