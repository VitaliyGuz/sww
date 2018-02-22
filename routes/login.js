var express = require('express')
var router = express.Router()
var client = require('../Client')

router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login' });
});

router.post('/', function (req, res, next) {
    res.redirect('/')
})

module.exports = router
