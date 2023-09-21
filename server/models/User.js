import mongoose from 'mongoose'

const User = mongoose.model('User', {
    name: {
        type: String,
        required: [true, "É necessário colocar um nome!"],
        set: (value) => {
            return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        }
    },
    email: {
        type: String,
        required: [true, "É necessário colocar um email!"],
        unique: [true, "Esse email já está cadastrado"],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "É necessário colocar uma senha!"],
        select: false
    }
})

export default User