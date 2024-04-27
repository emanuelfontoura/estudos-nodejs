const express = require('express')
const app = express()
const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.use(express.urlencoded({
    extended: true
}))

// app.use(express.json())

app.get('/users/add', ((req, res) => {
    res.sendFile(`${basePath}/add.html`)
}))

app.post('/users/save', ((req, res) => {
    res.send('Formulário enviado.')
    console.log(`Usuário: ${req.body.username} | Senha: ${req.body.password}`)
}))

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