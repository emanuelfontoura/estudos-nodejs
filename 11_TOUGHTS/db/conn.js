const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'toughts',
    'root',
    '1909',
    {
        host:'localhost',
        dialect:'mysql'
    }
)

try{
    sequelize.authenticate()
}catch(err){
    console.log(err)
}

module.exports = sequelize