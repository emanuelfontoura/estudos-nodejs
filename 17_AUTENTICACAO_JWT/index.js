// login e registro usando jwt
// desafio: criar uma api que faça registro, login e tenha uma rota protegida exigindo jwt

require('dotenv').config()

const PORT = process.env.PORT

// import modules
const express = require('express')

// import models
const User = require('./models/User.js')

// import routes
const userRoutes = require('./routes/UserRoutes.js')

// import database connection
const db = require('./db/conn.js')

// define express initialization
const app = express()

// middleware para definir arquivos estáticos
app.use(express.static('public'))

// middlewares para converter formato de dados do body na requisição
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// routes inicialization
app.use('/user', userRoutes)

// connection to database
// db.sync({force: true})
db.sync()
.then(() => {
    app.listen(PORT)
    console.log('Server running...')
})
.catch(error =>{
    console.log('An error ocurred on server inicialization: ' + error)
})