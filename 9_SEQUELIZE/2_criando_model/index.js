const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn.js')

const User = require('./models/User.js')

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

// REALIZAR SINCRONIZAÇÃO DE MODELS COM AS TABLES DO B.D E FAZER CONEXÃO COM O B.D
conn.sync().then(response => {
    app.listen(3000)
})
.catch(err => {
    console.log(err)
})