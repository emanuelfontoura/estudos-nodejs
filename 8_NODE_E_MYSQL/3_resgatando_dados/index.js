const express = require('express')
const exphbs = require('express-handlebars')
const livros = require('./livros')

const app = express()

const hbs = exphbs.create({
    partialsDir : ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use('/livros', livros)

app.get('/', ((req, res) => {
    res.render('home')
}))

app.listen(3000)