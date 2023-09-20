const mongoose = require('mongoose')
const User = require('../models/User')

const validId = (req, res, next) => {
    try {
        const id = req.params.id

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({message: 'ID Inválido'})
        }

        next()
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

const validUser = async (req, res, next) => {
    try {
        const id = req.params.id
    
        const user = await User.findById(id, '-password')

        if(!user) {
            return res.status(400).json({message: 'Usuário não encontrado'})
        }

        req.id = id
        req.user = user

        next()
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {validId, validUser}