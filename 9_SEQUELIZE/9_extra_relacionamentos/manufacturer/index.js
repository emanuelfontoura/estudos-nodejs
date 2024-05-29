const express = require('express')
const router = express.Router()

router.get('/cadastrar', ((req, res) => {
    res.render('registerManufacturer')
}))

module.exports = router