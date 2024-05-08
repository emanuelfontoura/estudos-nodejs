const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/sobre', ((req, res) => {
    res.render('sobre')
}))

app.get('/', ((req, res) => {
    res.render('home')
}))

app.listen(3000)