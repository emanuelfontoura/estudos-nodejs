const express = require('express')
const app = express()
const path = require('path')

const users = require('./users')

// convert html form to javascript object
app.use(express.urlencoded({
    extended: true
}))
// insert route 'users'
app.use('/users', users)
// static archives
app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.get('/', ((req, res) => {
    res.sendFile(`${basePath}/index.html`)
}))

app.listen(3000, () => {
    console.log('Servidor rodando...')
})