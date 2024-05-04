const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.use(express.urlencoded({
    extended: true
}))

router.get('/add', ((req, res) => {
    res.sendFile(`${basePath}/addProduct.html`)
}))

router.post('/save', ((req, res) => {
    res.send('Cadastrado!')
    console.log(`Produto ${req.body.product} com preço R$ ${req.body.price},00`)
}))

router.get('/:id', ((req, res) => {
    res.send(`Carregando dados do produto ${req.params.id}`)
}))

router.get('/', ((req, res) => {
    res.send('Carregando todos os produtos cadastrados...')
}))

module.exports = router