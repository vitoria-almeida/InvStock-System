const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: [true, "É necessário colocar um nome!"],
    },
    email: {
        type: String,
        required: [true, "É necessário colocar um email!"],
        unique: [true, "Email Exist"]
    },
    password: {
        type: String,
        required: [true, "É necessário colocar uma senha!"],
    }
})

module.exports = User