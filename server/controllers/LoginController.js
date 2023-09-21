import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

class LoginController {
    static async login(req, res) {
        try {
            const {email, password} = req.body

            if(!email) {
                return res.status(422).json({message: 'O email é obrigatório.'})
            }
            if(!password) {
                return res.status(422).json({message: 'A senha é obrigatória.'})
            }
               
            let user = null

            user = await User.findOne({email: email}).select('+password')     
            if(!user) {
                return res.status(404).json({message: 'Usuário ou senha inválidos'})
            }

            const checkPassword = await bcrypt.compare(password, user.password)
            if(!checkPassword || !user) {
                return res.status(404).json({message: 'Usário ou senha inválidos'})
            }
            
            const token = jwt.sign({id: user._id}, process.env.SECRET_KEY, {expiresIn: 600})
            
            res.status(200).json({message: 'Autenticação realizada com sucesso', token})
        } catch (error) {
            res.status(500).json({message: error})
        }
    } 
}

export default LoginController