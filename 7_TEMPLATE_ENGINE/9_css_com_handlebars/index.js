const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/sobre', ((req, res) => {
    res.render('sobre')
}))

app.get('/blog', ((req, res) => {
    const itens = [{
        title : 'Node',
        category : 'Back-end',
    }, {
        title : 'React',
        category : 'Front-end'
    }]
    res.render('blog', {itens})
}))

app.get('/dashboard', ((req, res) => {
    const auth = true
    const approvedUsers = ['Emanuel', 'Matheus', 'João']
    res.render('dashboard', {auth, approvedUsers})
}))

app.get('/', ((req, res) => {
    const user = {
        name : 'Emanuel',
        surname : 'Fontoura',
        age : 18
    }
    const palavra = 'Teste'
    res.render('home', {user, palavra})
}))

app.listen(3000)