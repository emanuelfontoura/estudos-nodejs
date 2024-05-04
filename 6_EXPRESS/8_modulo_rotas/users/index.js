const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.use(express.urlencoded({
    extended: true
}))

router.get('/add', ((req, res) => {
    res.sendFile(`${basePath}/add.html`)
}))

router.post('/save', ((req, res) => {
    res.send('Formulário enviado.')
    console.log(`Usuário: ${req.body.username} | Senha: ${req.body.password}`)
}))

router.get('/:id', ((req, res) => {
    const id = req.params.id
    // leitura da tabela users no b.d, buscando pelo user com esse id
    console.log(`Estamos buscando pelo usuário ${id}`)
    res.sendFile(`${basePath}/users.html`)
}))

router.get('/', ((req, res) => {
    res.sendFile(`${basePath}/usersIndex.html`)
}))

module.exports = router