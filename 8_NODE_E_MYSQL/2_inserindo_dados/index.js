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
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.post('/books/insertbook', ((req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (title, pageqty) VALUES('${title}', '${pageqty}');`
    conn.query(sql, (err) => {
        if(err){
            console.log(err)
        }
        res.redirect('/')
    })
}))

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
