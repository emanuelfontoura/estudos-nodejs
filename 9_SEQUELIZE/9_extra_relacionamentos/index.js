// imports
const express = require('express')
const exphbs = require('express-handlebars')

const conn = require('./db/conn.js')

const app = express()
const hbs = exphbs.create({
    partialsDir : ['views/partials']
})

// models sequelize
const Products = require('./models/Product.js')
const Manufacturer = require('./models/Manufacturer.js')

// routes
const product = require('./product/index.js')
app.use('/produto', product)
const manufacturer = require('./manufacturer/index.js')
app.use('/fabricante', manufacturer)

// engine handlebars
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// middlewares
app.use(express.static('public'))
app.use(express.urlencoded({
    extended : true
}))

// routes main
app.get('/', ((req, res) => {
    res.render('home')
}))

// sync with db
conn.sync()
.then(() => {
    app.listen(3000)
    console.log('Conectado ao MySQL!')
})
.catch(err => {
    console.log(err)
    console.log('Não foi possível conectar ao MySQL!')
})