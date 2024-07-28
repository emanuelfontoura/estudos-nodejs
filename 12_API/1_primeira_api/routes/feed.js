const express = require('express')
const router = express.Router()
const FeedController = require('../controllers/feed.js')

router.get('/posts', FeedController.getPosts)
router.post('/create', FeedController.createPost)

module.exports = router