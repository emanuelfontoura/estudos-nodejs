require('dotenv').config()
const bcrypt = require('bcrypt')
const User = require('../models/User.js')

const SECRET_KEY = process.env.SECRET_KEY

module.exports = class UserController{
    static async register(req, res){
        const {username, password} = req.body
        try{
            const userExists = (await User.findAll({where: {username, password}})).length > 0
            if(!userExists){
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(password, salt)
                const user = await User.create({username, password: hashedPassword})
                res.json({
                    status: 'usuario criado',
                    user
                })
            }else{
                res.json({
                    status: 'usuario ja existe'
                })
            }
        }catch(err){
            res.json({
                status: 'um erro ocorreu',
                error: err
            })
        }
    }
}