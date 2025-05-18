// importando dotenv
require('dotenv').config()

const PORT = process.env.PORT

// importando o express
const express = require ('express')

// importando os models
const User = require('./models/User.js')

// importando as routes
const UserRoute = require('./routes/UserRoute.js')

// importando o db
const db = require('./db/conn.js')

// definindo inicializacao do express
const app = express()

// middlewares para converter formato de dados do body na requisição
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// iniciando as rotas
app.use('/user', UserRoute)

db.sync()
//db.sync({force: true})
.then(() => {
    app.listen(PORT)
    console.log('Servidor iniciado com sucesso!')
})
.catch((error) => {
    console.log(error)
})