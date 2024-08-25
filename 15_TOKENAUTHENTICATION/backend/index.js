// importação dos arquivos/packages necessários
const express= require('express')
const app = express()
const conn = require('./db/conn.js')

// importação dos router com as rotas
const authRoutes = require('./routes/authRoutes.js')
const dashboardRoutes = require('./routes/dashboardRoutes.js')

// middleware para definir arquivos estáticos
app.use(express.static('public'))

// middlewares para converter formato de dados do body na requisição
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// middleware para permitir o cross-origin
app.use((req, res, nex) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
})

// middlewares para as rotas
app.use('/login', authRoutes)
app.use('', dashboardRoutes)

// conexão e sincronização com o banco de dados
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