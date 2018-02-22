var express = require('express')
var router = express.Router()
var Client = require('../Client')


router.post('/', function (req, res, next) {
    // const client = new Client()
    const ipAddress = (req.headers['X-Forwarded-For'] ||
        req.headers['x-forwarded-for'] ||
        '').split(',')[0] ||
        req.client.remoteAddress
    const result = Client.checkIPAddress(ipAddress)
    res.json({ ipAddress, result })
})

module.exports = router
