import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

class LoginController {
    static async login(req, res) {
        const {email, password} = req.body

        if(!email) {
            return res.status(422).json({message: 'O email é obrigatório.'})
        }
        if(!password) {
            return res.status(422).json({message: 'A senha é obrigatória.'})
        }

        let user = null

        try {
            user = await User.findOne({email: email})
        } catch (error) {
            console.error(error)
            res.send("error", error)
        }

        if(!user) {
            res.status(404).json({message: 'Usuário não encontrado.'})
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if(!checkPassword) {
            return res.status(422).json({message: 'Senha inválida.'})
        }
          
        try {
            const secret = process.env.SECRET
            const token = jwt.sign({id: user._id}, secret)
            res.status(200).json({message: 'Autenticação realizada com sucesso', token})
        } catch(error) {
            console.error(error)
            res.status(500).json({message: 'Não foi possível realizar a autenticação.'})
        }
    }
}

export default LoginController