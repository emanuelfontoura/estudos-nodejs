const User = require('../models/User.js')
const bcrypt = require('bcryptjs')

module.exports = class AuthController{
    static login(req, res){
        res.render('auth/login')
    }

    static register(req, res){
        res.render('auth/register')
    }

    static async registerPost(req, res){
        const {username, email, password, confirmPassword} = req.body

        // checando se as duas senhas são iguais
        if(password != confirmPassword){
            req.flash('message', 'As senhas não conferem. Tente novamente!')
            res.render('auth/register')
            return
        }

        // checando se o usuário já existe
        const checkIfUserExists = await User.findOne({where: {email:email}})

        if(checkIfUserExists){
            req.flash('message', 'Este email já está em uso. Tente outro!')
            res.render('auth/register')
            return
        }

        // aplicando salt e hash na senha
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = {
            name: username,
            email,
            password: hashedPassword,
        }

        try{
            const createdUser = await User.create(user)

            // iniciando session
            req.session.userId = createdUser.id

            req.flash('message', 'Usuário criado com sucesso!')

            // salvando a session e depois redirecionando
            req.session.save(() => {
                res.redirect('/')
            })
        }catch(err){
            req.flash('message', 'Erro ao criar usuário. Tente novamente!')
            res.render('auth/register')
        }
    }
}