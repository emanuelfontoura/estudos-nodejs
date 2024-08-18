const User = require('../models/User.js')
const bcrypt = require('bcrypt')

module.exports = class AuthController{
    static async loginPost(req, res, next){
        const {email, password} = req.body
        const user = await User.findOne({where: {email:email}}) || null
        // verificando se o usuário existe
        if(!user){
            res.status(401).json({
                message: 'Login unsucessful',
                error: 'There is no user with this email'
            })
            return
        }
        // comparando as senhas
        const passwordMatch = bcrypt.compareSync(password, user.password)
        if(!passwordMatch){
            res.status(401).json({
                message: 'Login unsucessful',
                error: 'Incorrect password'
            })
            return
        }
        // gerar o token e salvar a sessão com os cookies e session do express
        res.status(201).json({
            token: '',
            message: 'Login sucessful'
        })
    }

    static async createLoginPost(req, res, next){
        const {username, email, password, password2} = req.body
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)
        if(password !== password2){
            res.status(400).json({
                message: 'Password and confirm password are diferents'
            })
            return
        }
        try{
            const data = await User.create({username, email, password: hashedPassword})
            res.status(201).json({
                message: 'Register sucessful',
                data: {
                   id: data.id,
                   username: data.username,
                   email: data.email,
                   createdAt: data.createdAt
                }
            })
            next()
        }catch(err){
            res.status(400).json({
                message: 'Register unsucessful',
                error: err.message
            })
            return
        }
    }
}