const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController.js')

router.use(express.urlencoded({extended:true}))
router.use(express.json())

router.get('/add', TaskController.createTask)

router.post('/add', TaskController.createTaskSave)

router.get('/', TaskController.showTasks)

module.exports = router