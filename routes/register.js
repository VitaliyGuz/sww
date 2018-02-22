var express = require('express')
var router = express.Router()
var client = require('../Client')
var sendEmail = require('../utils/mailSender')
var matchConsecutiveLetters = require('../utils/matchConsecutiveLetters')
var matchSameLetters = require('../utils/matchSameLetters')


router.post('/', function (req, res, next) {
    const { email, password } = req.body
    if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/).test(password)) {
        res.send('Password needs to include numbers (such as:123), letters (such as: BCD) and letters in upper case (such as: bcd) at the same time;')
        return
    }
    if (matchSameLetters(password)) {
        res.send('Maximum of 4 same letters (eg: aaaa) ')
        return
    }
    if (matchConsecutiveLetters(password)) {
        res.send('Maximum of 4 consecutive letters (eg: abcd) ')
        return
    }
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
