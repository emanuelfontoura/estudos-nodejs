const express = require('express')
const app = express()
const path = require('path')

const users = require('./users')

const basePath = path.join(__dirname, 'templates')

app.use(express.urlencoded({
    extended: true
}))

app.use('/users', users)

app.get('/', ((req, res) => {
    res.sendFile(`${basePath}/index.html`)
}))

app.listen(3000, () => {
    console.log('Servidor rodando...')
})