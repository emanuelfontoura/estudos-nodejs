const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.use(express.urlencoded({
    extended: true
}))

router.get('/add', ((req, res) => {
    res.sendFile(`${basePath}/addStore.html`)
}))

router.post('/save', ((req, res) => {
    res.send('Cadastrado!')
    console.log(`Nome da loja inserido: ${req.body.store}`)
}))

router.get('/:id', ((req, res) => {
    res.send(`Carregando dados da loja ${req.params.id}`)
}))

router.get('/', ((req, res) => {
    res.send('Carregando todas as lojas cadastradas...')
}))

module.exports = router