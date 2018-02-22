class Client {
    constructor() {
        this.ipAddresses = []
    }

    addIPAddress(ipAddress) {
        this.ipAddresses = [
            ...this.ipAddresses,
            { ipAddress, createdAt: new Date() },
        ]
    }

    removeOldIPAddresses() {
        this.ipAddresses = this.ipAddresses.filter(address =>
            (new Date() - address.createdAt) < 1000 * 60 * 60)
    }

    checkIPAddress(ipAddress) {
        this.addIPAddress(ipAddress)
        this.removeOldIPAddresses()
        const address = this.ipAddresses.filter(_ipAddress => _ipAddress.ipAddress === ipAddress)
        return address.length < 5
    }
}

module.exports = new Client
