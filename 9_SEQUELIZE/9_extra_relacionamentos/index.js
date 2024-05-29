const express = require('express')
const exphbs = require('express-handlebars')

const conn = require('./db/conn.js')

const Products = require('./models/Product.js')
const Manufacturer = require('./models/Manufacturer.js')

const app = express()
const hbs = exphbs.create({
    partialsDir : ['views/partials']
})

// routes
const product = require('./product/index.js')
app.use('/produto', product)
const manufacturer = require('./manufacturer/index.js')
app.use('/fabricante', manufacturer)

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(express.urlencoded({
    extended : true
}))

app.get('/', ((req, res) => {
    res.render('home')
}))

conn.sync()
.then(() => {
    app.listen(3000)
    console.log('Conectado ao MySQL!')
})
.catch(err => {
    console.log(err)
    console.log('Não foi possível conectar ao MySQL!')
})