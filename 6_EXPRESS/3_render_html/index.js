const express = require('express')
const app = express()

const path = require('path')
const url = require('url')

const port = 3000

const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})