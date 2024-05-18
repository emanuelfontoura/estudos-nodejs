const express = require('express')
const router = express.Router()
const mysql = require('mysql')

router.use(express.urlencoded({extended : true}))
router.use(express.json())

router.get('/cadastrados', ((req, res) => {
    const sql = `SELECT * FROM books;`
    conn.query(sql, ((err, data) => {
        if(err){
            console.log(err)
        }else{
            res.render('livrosCadastrados', {data})
        }
    }))
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

router.get('/cadastrar', ((req, res) => {
    res.render('livrosAdicionar')
}))

router.post('/deletar/:id', ((req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM books WHERE id = '${id}'`
    conn.query(sql, (err) => {
        if(err){
            console.log(err)
        }else{
            res.redirect('/livros/cadastrados')
        }
    })
}))

router.post('/responseEdit/:id', ((req, res) => {
    const newTitle = req.body.newTitle
    const newPageqty = req.body.newPageqty
    const id = req.params.id
    const sql = `UPDATE books SET title = '${newTitle}', pageqty = '${newPageqty}' WHERE id = '${id}';`
    conn.query(sql, (err) => {
        if(err){
            console.log(err)
        }else{
            res.redirect('/livros/cadastrados')
        }
    })
}))

router.get('/editar/:id', ((req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE id = '${id}';`
    conn.query(sql, (err, data) => {
        if(err){
            console.log(err)
        }else{
            res.render('livrosEditar', {data})
        }
    })
}))

router.get('/:id', ((req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE id = '${id}';`
    conn.query(sql, ((err, data) => {
        if(err){
            console.log(err)
        }else{
            res.render('livroBuscado', {data})
        }
    }))
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