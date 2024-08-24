const express= require('express')
const app = express()
const conn = require('./db/conn.js')

const authRoutes = require('./routes/authRoutes.js')
const dashboardRoutes = require('./routes/dashboardRoutes.js')

// middleware para definir arquivos estáticos
app.use(express.static('public'))

// middlewares para converter formato de dados do body na requisição
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use('/login', authRoutes)
app.use('', dashboardRoutes)

conn.sync()
.then(() => {
    const port = 3000
    app.listen(port)
    console.log(`Conectado ao servidor na porta: ${port}`)
})
.catch(err => {
    console.log('Erro ao tentar sinronizar o banco de dados!')
    console.log(err)
})