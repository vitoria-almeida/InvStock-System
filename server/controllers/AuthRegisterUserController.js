import bcrypt from 'bcrypt'
import User from '../models/User.js'

class AuthRegisterUserController {
    static async init(req, res) {
        res.send({message:'Bem vindo à API'})
    } 

    static async registerUser(req, res) {
        try {
            const { name, email, password, confirmPassword } = req.body

            if(!name) {
                return res.status(422).json({message: 'O nome é obrigatório'})
            }
            if(!email) {
                return res.status(422).json({message: 'O email é obrigatório'})
            }
            if(!password) {
                return res.status(422).json({message: 'A senha é obrigatória'})
            }
            if(password != confirmPassword) {
                return res.status(422).json({message: 'As senhas não coincidem'})
            }

            const userExist = await User.findOne({email: email})
            if(userExist) {
                return res.status(422).json({message: 'Já existe uma conta cadastrada com este email'})
            }

            const hash = await bcrypt.genSalt(12)

            const hashPassword = await bcrypt.hash(password, hash)
            
            const user = new User({
                name,
                email,
                password: hashPassword
            })

            await user.save()

            res.status(201).json({message: 'Usuário cadastrado com sucesso!', user})         
        } catch(error) {
            res.status(500).json({message: error.message})
        }
    }

    static async findAllUsers(req, res) {
        try {
            const allUsers = await User.find()

            if(allUsers.length === 0) {
                return res.status(400).json({message: 'Não há usuários registrados'})
            }

            res.status(200).json({allUsers})
        } catch(error) {
            res.status(500).json({message: error.message})
        }
    }

    static async getUserById(req, res) {
        try {
            const user = req.user
            res.status(200).json({user})
        } catch(error) {
            res.status(500).json({message: error.message})
        }
    }

    static async updateUser(req, res) {
        try {
            const { name, email, password, confirmPassword } = req.body
            if(!name && !email && !password && !confirmPassword) {
                return res.status(422).json({message: 'Preencha ao menos um item a ser atualizado'})
            }
            const user = req.user

            if (name) {
                user.name = name
            } 
            if (email) {
                user.email = email
            } 
            if (password && confirmPassword) {
                if (password !== confirmPassword) {
                    return res.status(422).json({ message: 'As senhas não coincidem' })
                }
                const hash = await bcrypt.genSalt(12)
                const hashPassword = await bcrypt.hash(password, hash)
                user.password = hashPassword;
            }

            await user.save()

            res.status(201).json({message: 'Usuário atualizado com sucesso!', user})
        } catch(error) {
                res.status(500).json({message: error.message})
        }
    }
}

export default AuthRegisterUserController