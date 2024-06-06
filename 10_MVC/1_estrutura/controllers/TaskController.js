const Task = require('../models/Task.js')

module.exports = class TaskController {
    
    static createTask(req, res){
        res.render('tasks/add')
    }

    static async createTaskSave(req, res){
        const {title, description} = req.body
        await Task.create({title, description, done:false})
        res.redirect('/tasks')
    }

    static async showTasks(req, res){
        const tasks = await Task.findAll({raw:true})
        const newTasks = tasks.map(task => {
            if(task.done === 0){
                task.done = false
            }else{
                task.done = true
            }
            return task
        })
        res.render('tasks/show', {newTasks})
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

    static async toggleTaskStatus(req, res){
        const id = req.body.id
        const task = await Task.findByPk(id, {raw:true})
        if(task.done === 0){
            await Task.update({done:1}, {where:{id}})
        }else{
            await Task.update({done:0}, {where:{id}})
        }
        res.redirect('/tasks')
    }
}