const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User.js')
require('dotenv').config()

const SECRET_KEY = process.env.SECRET_KEY

module.exports = class UserController{
    static async register(req, res){
       const {username, password} = req.body
       if(!username || !password){
        res.status(400).json({
            statusCode: 400,
            message: 'It is mandatory to fill in the username and password fields'
        })
       }
       try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        await User.create({
            username,
            password: hashedPassword
        })
        res.status(200).json({
            statusCode: 200,
            message: 'Register successfully!'
        })
       }catch(error){
        res.status(500).json({
            statusCode: 500,
            message: 'An ocurred on server. Try again later!',
            errorMessage: error.message
        })
       }
    }

    static async login(req, res){
        const {username, password} = req.body
        try{
            const user = await User.findOne({where: {username}})
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch){
                res.status(400).json({
                    statusCode: 400,
                    message: 'Incorrect password'
                })
                return
            }
            const token = jwt.sign({username}, SECRET_KEY, {expiresIn: '1h', subject: `${user.id}`})
            res.status(200).json({
                statusCode: 200,
                message: 'Successfully logged in!',
                token
            })
        }catch(error){
            res.status(500).json({
                statusCode: 500,
                message: 'An error ocurred on server!',
                errorMessage: error.message
            })
        }
    }

    static async getUserData(req, res){
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if(!token){
            res.status(400).json({
                statusCode: 400,
                message: 'Token not provided!'
            })
        }
        try{
            const tokenDecoded = jwt.verify(token, SECRET_KEY)
            const userId = Number.parseInt(tokenDecoded.sub)
            const userData = await User.findByPk(userId)
            if(!userData){
                res.status(400).json({
                    statusCode: 400,
                    message: 'This user not exists!'
                })
            }
            res.status(200).json({
                statusCode: 200,
                message: 'Successfully obtained data!',
                userData
            })
        }catch(error){
            res.status(500).json({
                statusCode: 500,
                message: 'An error ocurred on server!',
                errorMessage: error.message
            })
        }
    }
}