const mongoose = require('mongoose')

const wordlistSchema = mongoose.Schema({
    words: {
        type: Array,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('wordlist', wordlistSchema)