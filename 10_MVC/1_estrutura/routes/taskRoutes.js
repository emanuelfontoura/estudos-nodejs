const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController.js')

router.use(express.urlencoded({extended:true}))
router.use(express.json())

router.post('/editSave', TaskController.editTaskSave)

router.get('/edit/:id', TaskController.editTask)

router.post('/remove', TaskController.removeTask)

router.get('/add', TaskController.createTask)

router.post('/add', TaskController.createTaskSave)

router.get('/', TaskController.showTasks)

router.get('/:id', TaskController.showTask)

module.exports = router