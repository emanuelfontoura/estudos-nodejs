const User = require('../models/User.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SECRET = process.env.JWT_SECRET

module.exports = class AuthController{
    static async loginPost(req, res, next){
        try{
            const {email, password} = req.body
            const user = await User.findOne({where: {email:email}}, (error, user) => {
                    // verificando se o usuário existe
                    if(!user){
                        res.status(401).json({
                            statusCode: 401,
                            message: 'Login unsucessful',
                            error: error.message,
                            errorMessage: 'There is no user with this email',
                            data:{
                                email: email
                            }
                        })
                        return
                    }   
            })
            
            // comparando as senhas
            const passwordMatch = bcrypt.compareSync(password, user.password)
            if(!passwordMatch){
                res.status(401).json({
                    statusCode: 401,
                    message: 'Login unsucessful',
                    errorMessage: 'Incorrect password'
                })
                return
            }

            // gerar o token e dar o login como bem sucedido
            const token = jwt.sign({name: user.username}, SECRET)
            res.status(200).json({
                statusCode: 200,
                message: 'Login sucessful',
                data: {
                    token
                }
            })
        }catch(error){
            console.error(error)
            res.status(500).json({
                statusCode: 500,
                message: 'An error occurred',
                errorMessage: error.message
            })
        }
    }

    static verifyToken(req, res, next){
        const tokenHeader = req.headers["authorization"]
        const token = tokenHeader && tokenHeader.split(" ")[1]

        if(!token){
            res.status(401).json({
                statusCode: 401,
                message: 'Unauthorized token'
            })
            return
        }

        try{
            jwt.verify(token, SECRET)
            next()
        }catch(error){
            console.error(error)
            res.status(500).json({
                statusCode: 500,
                message: 'Token not valid',
                errorMessage: error.message
            })
        }
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
                statusCode: 201,
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
                ststusCode: 400,
                message: 'Register unsucessful',
                error: err.message
            })
            return
        }
    }
}