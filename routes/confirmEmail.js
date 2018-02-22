var express = require('express')
var router = express.Router()
var client = require('../Client')
var User = require('../models/user')


router.get('/:token', function (req, res, next) {
    const result = client.findToken(req.params.token)
    if (!result) {
        res.send('user not found')
        return
    }
    const user = new User(result)
    user.save((error, result) => res.redirect('/'))
})

module.exports = router
