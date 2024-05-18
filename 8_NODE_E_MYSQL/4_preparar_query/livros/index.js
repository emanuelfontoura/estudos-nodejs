const express = require('express')
const router = express.Router()
const pool = require('../db/conn.js')

router.use(express.urlencoded({extended : true}))
router.use(express.json())

router.get('/cadastrados', ((req, res) => {
    const sql = `SELECT * FROM books;`
    pool.query(sql, ((err, data) => {
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

    const sql = `INSERT INTO books (??, ??) VALUES(?, ?);`
    pool.query(sql, ['title', 'pageqty', title, pageqty], (err) => {
        if(err){
            console.log(err)
        }
        res.redirect('/livros/cadastrados')
    })
}))

router.get('/cadastrar', ((req, res) => {
    res.render('livrosAdicionar')
}))

router.post('/deletar/:id', ((req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM books WHERE ?? = ?`
    pool.query(sql, ['id', id], (err) => {
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
    const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?;`
    pool.query(sql, ['title', newTitle, 'pageqty', newPageqty, 'id', id], (err) => {
        if(err){
            console.log(err)
        }else{
            res.redirect('/livros/cadastrados')
        }
    })
}))

router.get('/editar/:id', ((req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE ?? = ?;`
    pool.query(sql, ['id', id], (err, data) => {
        if(err){
            console.log(err)
        }else{
            res.render('livrosEditar', {data})
        }
    })
}))

router.get('/:id', ((req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE ?? = ?;`
    pool.query(sql, ['id', id], ((err, data) => {
        if(err){
            console.log(err)
        }else{
            res.render('livroBuscado', {data})
        }
    }))
}))

module.exports = router