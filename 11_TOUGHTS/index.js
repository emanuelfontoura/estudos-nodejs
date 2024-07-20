// importação dos pacotes e arquivos necessários
const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const fileStore = require('session-file-store')(session)
const flash = require("express-flash")
const conn = require('./db/conn.js')

// importação dos models
const Tought = require('./models/Tought.js')
const User = require('./models/User.js')

// importação das rotas
const toughtsRoutes = require('./routes/toughtsRoutes.js')
const authRoutes = require('./routes/authRoutes.js')

// criando e definindo a engine do handlebars
const app = express()
const hbs = exphbs.create({
    partialsDir : ['views/partials']
})
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// middleware para definir arquivos estáticos
app.use(express.static('public'))

// middlewares para converter formato de dados do body na requisição
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// session
app.use(
    session({
        name: "session",
        secret:"nosso_secret",
        resave: false,
        saveUninitialized : false,
        store : new fileStore({
            logFn: function(){},
            path:require('path').join(require('os').tmpdir(), 'sessions')
        }),
        cookie:{
            secure:false,
            maxAge:600000,
            // expires: new Date(Date.now + 360000),
            httpOnly:true
        }   
    })
)

// flash messages
app.use(flash())

// set session to res
app.use((req, res, next) => {
    if(req.session.userId){
        res.locals.session = req.session
    }
    next()
})

// rotas "toughts"
app.use('', toughtsRoutes)

// rotas "user"
app.use('', authRoutes)

// conexão e sincronização com o bd
conn
    // .sync({force:true})
    .sync()
.then(() => {
    app.listen(3000)
    console.log('Conectado e sincronizado ao banco de dados!')
})
.catch(err => {
    console.log('Erro ao tentar sinronizar o banco de dados!')
    console.log(err)
})