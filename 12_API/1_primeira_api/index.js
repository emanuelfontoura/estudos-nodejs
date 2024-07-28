const express = require('express')
const app = express()
const feedRoutes = require('./routes/feed.js')
const bodyParser = require('body-parser')

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())
app.use(bodyParser.json()) // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Alow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization')
    next()
})

// endpoints
app.use('/feed', feedRoutes)

app.listen(3000, () => {
    console.log('Server iniciado com sucesso!')
})