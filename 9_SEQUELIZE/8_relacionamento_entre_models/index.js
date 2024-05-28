const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn.js')
const {getUserAddresses} = require('./services/getUserAdresses.js')

const User = require('./models/User.js')
const Address = require('./models/Address')

const app = express()

const hbs = exphbs.create({
    partialsDir : ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(express.urlencoded({
    extended : true
}))

app.post('/address/create/:id', (async (req, res) => {
    const UserId = req.params.id
    const {street, number, city} = req.body
    await Address.create({street, number, city, UserId})
    res.redirect(`/usuarios/${UserId}`)
}))

app.post('/usuarios/editResponse/:id', (async (req, res) => {
    const id = req.params.id
    let {name, occupation, newsletter} = req.body

    if(newsletter === 'Y'){
        newsletter = true
    }else{
        newsletter = false
    }

    await User.update({
        name,
        occupation,
        newsletter
    }, {where : {id:id}})

    res.redirect('/usuarios')    
}))

app.get('/usuarios/editar/:id', (async (req, res) => {
    const id = req.params.id
    const user = await User.findOne({raw : true, where : {id:id}})
    if(user.newsletter === 1){
        user.newsletter = true
    }else{
        user.newsletter = false
    }
    const userAddresses = await getUserAddresses(id)
    res.render('userEdit', {user, userAddresses})
}))

app.post('/address/delete/:id', (async (req, res) => {
    const id = req.params.id
    const UserId = req.body.UserId
    console.log(UserId)
    await Address.destroy({
        where : {id : id}
    })

    res.redirect(`/usuarios/${UserId}`)
}))

app.post('/usuarios/deleteResponse/:id', (async (req, res) => {
    const id = req.params.id

    await User.destroy({where : {id:id}})

    res.redirect('/usuarios')
}))

app.get('/usuarios', ( async (req, res) => {
    
    const users = await User.findAll({raw : true})

    res.render('users', {users})
}))

app.post('/registerResponse', ( async (req, res) => {
    let {name, occupation, newsletter} = req.body
    if(newsletter === 'true'){
        newsletter = true
    }else{
        newsletter = false
    }
    await User.create({name, occupation, newsletter})
    res.redirect('/')
}))

app.get('/registrar', ((req, res) => {
    res.render('register')
}))

app.get('/usuarios/:id', ( async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({
        raw : true,
        where : {id}
    })

    const userAddresses = await getUserAddresses(id)

    res.render('user', {user, userAddresses})
}))

app.get('/', ((req, res) => {
    res.render('home')
}))

conn.sync()
.then(response => {
    app.listen(3000)
    console.log('Conectado ao MySQL!')
})
.catch(err => {
    console.log('Não conectado ao MySQL!')
    console.log(err)
})