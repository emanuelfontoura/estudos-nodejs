const express = require('express')
const router = express.Router()
const mysql = require('mysql')

router.use(express.urlencoded({extended : true}))
router.use(express.json())

router.post('/livros/response', ((req, res) => {
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

router.get('/livros/cadastro', ((req, res) => {
    res.render('livrosAdicionar')
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
})

module.exports = router