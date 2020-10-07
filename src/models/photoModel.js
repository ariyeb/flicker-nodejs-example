const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({
    src: {
        type: String
    },
    alt: {
        type: String
    }
})

const Photo = mongoose.model('Photo', photoSchema)

module.exports = Photo