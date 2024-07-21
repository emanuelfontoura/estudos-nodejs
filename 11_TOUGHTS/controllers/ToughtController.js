const Tought = require('../models/Tought.js')
const User = require('../models/User.js')
const { Op } = require('sequelize')

module.exports = class ToughtController{
    static async showToughts(req, res){
        let search, order
        req.query.search ? search = req.query.search : search = ''
        req.query.order ? order = req.query.order : order = 'new'
        let toughts = await Tought.findAll({
            include: User,
            where: {
                title: { [Op.like] : `%${search}%` }
            },
            order : [['createdAt', order === 'new' ? 'DESC' : 'ASC']]
        })
        toughts = toughts.map((result) => result.get({plain:true}))
        let toughtsQty
        toughtsQty === 0 ? toughtsQty = false : toughtsQty = toughts.length
        res.render('toughts/home', {toughts, search, order, toughtsQty})
    }

    static async dashboard(req, res){
        const userId = req.session.userId

        const user = await User.findOne({
            where: {id: userId}, 
            include : Tought,
            plain: true
        })

        const toughts = user.Toughts.map((result) => result.dataValues)
        let emptyToughts = false

        toughts.length === 0 ? emptyToughts = true : emptyToughts = false 

        if(!user){
            res.redirect('/login')
        }

        res.render('toughts/dashboard', {toughts, emptyToughts})
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
        const tought = await Tought.findOne({where: {id:id}})
        res.render(`toughts/edit`, {tought: tought.dataValues})
    }

    static async editToughtSave(req, res){
        const id = req.body.id
        const tought = {
            id: id,
            title: req.body.title,
            UserId: req.session.userId
        }
        try{
            await Tought.update(tought, {where: {id:id}})
            req.flash(`message`, `Pensamento editado com sucesso!`)
            req.session.save(() => {
                res.redirect(`/dashboard`)
            })
        }catch(error){
            req.flash(`message`, `Ocorreu um erro. Tente novamente!`)
        }
    }

    static async destroyTought(req, res){
        const id = req.body.id
        const userId = req.session.userId
        try{
            await Tought.destroy({where:{id:id, UserId:userId}})
            req.flash(`message`, `Pensamento removido com sucesso!`)
            req.session.save(() => {
                res.redirect(`/dashboard`)
            })
        }catch(error){
            req.flash(`message`, `Ocorreu um erro. Tente novamente!`)
        }
    }
}