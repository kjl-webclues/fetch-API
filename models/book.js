const mongoose = require('mongoose')

//create a schema

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model ('book',bookSchema)