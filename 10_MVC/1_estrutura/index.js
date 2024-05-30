const express = require('express')
const exphbs = require('express-handlebars')

const conn = require('./db/conn.js')
const Task = require('./models/Task.js')

const taskRoutes = require('./routes/taskRoutes.js')

const app = express()
const hbs = exphbs.create({
    partialsDir : ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

app.use('/tasks', taskRoutes)

conn.sync()
.then(() => {
    app.listen(3000)
    console.log('Servidor aberto e sincronizado com o banco de dados!')
})
.catch(error => {
    console.log(error)
    console.log('Erro ao fazer a sincronização com o banco de dados!')
})