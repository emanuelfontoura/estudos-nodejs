const Tought = require('../models/Tought.js')
const User = require('../models/User.js')

module.exports = class ToughtController{
    static async showToughts(req, res){
        res.render('toughts/home')
    }

    static async dashboard(req, res){
        const userId = req.session.userId

        const user = await User.findOne({
            where: {id: userId}, 
            include : Tought,
            plain: true
        })

        const toughts = user.Toughts.map((result) => result.dataValues)

        if(!user){
            res.redirect('/login')
        }

        res.render('toughts/dashboard', {toughts})
    }

    static createTought(req, res){
        res.render('toughts/create')
    }

    static async createToughtSave(req, res){
        const tought = {
            title: req.body.title,
            UserId: req.session.userId
        }

        try{
            await Tought.create(tought)
            req.flash('message', 'Pensamento criado com sucesso!')
            req.session.save(() => {
                res.redirect('/dashboard')
            })
        }catch(error){
            req.flash('message', 'Erro ao criar pensamento! ' + error)
        }
    }

    static async editTought(req, res){
        const id = req.params.id
        await Tought.update()
    }
}