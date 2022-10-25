const mongoose = require('mongoose')

const wordlistSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    words: {
        type: Array,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('wordlist', wordlistSchema)