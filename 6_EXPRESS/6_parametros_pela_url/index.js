const express = require('express')
const app = express()
const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', ((req, res) => {
    const id = req.params.id
    // leitura da tabela users no b.d, buscando pelo user com esse id
    console.log(`Estamos buscando pelo usuário ${id}`)
    res.sendFile(`${basePath}/users.html`)
}))

app.get('/', ((req, res) => {
    res.sendFile(`${basePath}/index.html`)
}))

app.listen(3000, () => {
    console.log('Servidor rodando...')
})