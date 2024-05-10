const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir : ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const products = [
    {
        name : 'Café',
        price : 5.75,
        quantity : 200
    },
    {
        name : 'Amendoim',
        price : 3.75,
        quantity : 200
    },
    {
        name : 'Arroz',
        price : 12.99,
        quantity : 500
    },
    {
        name : 'Coca-cola',
        price : 7.99,
        quantity : 100
    }
]

app.get('/:name', ((req, res) => {
    const name = req.params.name
    const selectedProduct = products.filter(product => product.name.toUpperCase() === name.toUpperCase())
    res.render('product', {selectedProduct})
}))

app.get('/', ((req, res) => {
    res.render('home', {products})
}))

app.listen(3000)