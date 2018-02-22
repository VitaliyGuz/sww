const guid = require('./utils/guid')

class Client {
    constructor() {
        this.ipAddresses = []
    }

    addIPAddress({ ipAddress, email, password }) {
        const newGuid = guid()
        this.ipAddresses = [
            ...this.ipAddresses,
            { ipAddress, email, password, guid: newGuid, createdAt: new Date() },
        ]
        return newGuid
    }

    removeOldIPAddresses() {
        this.ipAddresses = this.ipAddresses.filter(address =>
            (new Date() - address.createdAt) < 1000 * 60) // set up 1 min for testing
    }

    checkIPAddress({ ipAddress, email, password }) {
        const guid = this.addIPAddress({ ipAddress, email, password })
        this.removeOldIPAddresses()
        const address = this.ipAddresses.filter(_ipAddress => _ipAddress.ipAddress === ipAddress)
        return address.length <= 5 ? guid : ''
    }

    findToken(token) {
        return this.ipAddresses.find(_ipAddress => _ipAddress.guid === token)
    }
}

module.exports = new Client
