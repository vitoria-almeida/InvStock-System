import 'dotenv/config.js'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const authMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers
 
        if(!authorization) {
            return res.status(401).json({message: 'Necessário autorização'})
        }

        const parts = authorization.split(' ')
        const [schema, token] = parts

        if (parts.length !== 2) {
            return res.status(401).json({message: 'Autorização negada'})
        }
        if (schema !== 'Bearer') {
            return res.status(401).json({message: 'Autorização negada'})
        }

        jwt.verify(token, process.env.SECRET_KEY, async(error, decoded) => {           
            if(error) {
                return res.status(401).json({message: 'Token inválido'})
            }
 
            const user = await User.findById(decoded.id)
            if(!user || !user.id) { 
                return res.status(400).json({message: 'Usuário não encontrado'})
            } 

            req.userId = user.id

            return next()
        })        
    } catch(error) {
        res.status(500).json({message: error.message})
    } 
}