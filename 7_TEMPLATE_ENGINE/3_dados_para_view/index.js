const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/sobre', ((req, res) => {
    res.render('sobre')
}))

app.get('/', ((req, res) => {
    const user = {
        name : 'Emanuel',
        surname : 'Fontoura'
    }
    const palavra = 'Teste'
    res.render('home', {user, palavra})
}))

app.listen(3000)