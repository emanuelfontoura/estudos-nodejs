const express = require('express')
const router = express.Router()
const mysql = require('mysql')

router.use(express.urlencoded({extended : true}))
router.use(express.json())

router.post('/responseSearch', ((req, res) => {
    const title = req.body.title
    const sql = `SELECT * FROM books WHERE title = '${title}';`
    conn.query(sql, (err, data) => {
        if(err){
            console.log(err)
        }else{
            res.render('livroBuscado', {data})
        }
    })
}))

router.get('/buscar', ((req, res) => {
    res.render('livrosBuscar')
}))

router.post('/responseAdd', ((req, res) => {
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

router.get('/cadastro', ((req, res) => {
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