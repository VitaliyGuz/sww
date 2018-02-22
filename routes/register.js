var express = require('express')
var router = express.Router()
var client = require('../Client')
var sendEmail = require('../utils/mailSender')


router.post('/', function (req, res, next) {
    const { email, password } = req.body
    const ipAddress = (req.headers['X-Forwarded-For'] ||
        req.headers['x-forwarded-for'] ||
        '').split(',')[0] ||
        req.client.remoteAddress
    const token = client.checkIPAddress({ ipAddress, email, password })
    if (token !== '') {
        sendEmail({ email, token, host: req.header('host') })
    }
    res.redirect('/')
})

module.exports = router
