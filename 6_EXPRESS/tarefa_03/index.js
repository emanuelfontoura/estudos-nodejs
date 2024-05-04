const express = require('express')
const app = express()
const path = require('path')
const products = require('./products')
const stores = require('./stores')

const port = 5000
const basePath = path.join(__dirname, 'templates')

app.use(express.static('public'))
app.use('/products', products)
app.use('/stores', stores)

app.get('/', ((req, res) => {
    res.sendFile(`${basePath}/index.html`)
}))

app.use(((req, res, next) => {
    res.status(404)
    res.sendFile(`${basePath}/404.html`)
}))

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}...`)
})