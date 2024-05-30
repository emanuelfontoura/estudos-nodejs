const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'nodemvc2',
    'root',
    '1909',
    {
        host : 'localhost',
        dialect : 'mysql'
    }
)

try{
    sequelize.authenticate()
    console.log('Conectado do banco de dados!')
}catch(error){
    console.log(error)
    console.log('Não foi possível conectar ao banco de dados!')
}

module.exports = sequelize