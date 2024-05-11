const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

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

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1909',
    database: 'nodemysql'
})

conn.connect(err => {
    if(err){
        console.log(err)
    }else{
        console.log('Conectou ao MySQL!')
    }
    app.listen(3000)
})
