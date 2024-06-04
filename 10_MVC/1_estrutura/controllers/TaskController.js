const Task = require('../models/Task.js')

module.exports = class TaskController {
    
    static createTask(req, res){
        res.render('tasks/add')
    }

    static async createTaskSave(req, res){
        const {name, description} = req.body
        await Task.create({name, description, done: false})
        res.redirect('/')
    }

    static showTasks(req, res){
        res.render('tasks/show')
    }
}