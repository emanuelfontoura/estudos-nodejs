const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn.js')

const app = express()

const hbs = exphbs.create({
    partialsDir : ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', ((req, res) => {
    res.render('home')
}))

app.listen(3000)