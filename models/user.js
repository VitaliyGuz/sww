var mongoose = require('mongoose')

const Schema = mongoose.Schema

const dropSchema = new Schema({
    email: { type: String },
    password: { type: String },
    createdAt: { type: Date, default: Date.now, required: true },
})

module.exports = mongoose.model('User', dropSchema)
