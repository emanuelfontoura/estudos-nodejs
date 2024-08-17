const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'users',
    'root',
    '1909',
    {
        host: 3000,
        dialect: 'mysql'
    }
)

try{
    sequelize.authenticate()
}catch(err){
    console.log('Erro ao tentar autenticar o banco de dados!')
    console.log(err)
}

module.exports = sequelize