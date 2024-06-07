const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const fileStore = require('session-file-store')(session)
const flash = require("express-flash")
const conn = require('./db/conn.js')

const app = express()

conn.sync()
.then(() => {
    app.listen(3000)
    console.log('Conectado e sincronizado ao banco de dados!')
})
.catch(err => {
    console.log('Erro ao tentar sinronizar o banco de dados!')
    console.log(err)
})