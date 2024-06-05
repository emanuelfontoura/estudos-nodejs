const Task = require('../models/Task.js')

module.exports = class TaskController {
    
    static createTask(req, res){
        res.render('tasks/add')
    }

    static async createTaskSave(req, res){
        const {title, description} = req.body
        await Task.create({title, description})
        res.redirect('/tasks')
    }

    static async showTasks(req, res){
        const tasks = await Task.findAll({raw:true})
        res.render('tasks/show', {tasks})
    }

    static async showTask(req, res){
        const task = await Task.findByPk(req.params.id, {raw:true})
        res.render('tasks/showOneTask', {task})
    }

    static async removeTask(req, res){
        const id = req.body.id
        await Task.destroy({where: {id}})
        res.redirect('/tasks')
    }

    static async editTask(req, res){
        const id = req.params.id
        const task = await Task.findByPk(id, {raw:true})
        res.render('tasks/edit', {task})
    }

    static async editTaskSave(req, res){
        const {title, description, id} = req.body
        await Task.update({title, description}, {where: {id}})
        res.redirect('/tasks')
    }
}