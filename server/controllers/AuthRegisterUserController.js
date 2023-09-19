const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('../models/User')

module.exports = class AuthRegisterUserController {
    static async init(req, res) {
        res.send({message:'Bem vindo à API'})
    } 

    static async registerUser(req, res) {
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

        try {
            await user.save()
            res.status(201).json({message: 'Usuário cadastrado com sucesso!', user})
        } catch(error) {
            res.status(500).json({message: 'Ocorreu um erro ao cadastrar o usuário, tente novamente.'})
        }
    }

    static async findAllUsers(req, res) {
        const allUsers = await User.find()

        if(allUsers.length === 0) {
            return res.status(400).json({message: 'Não há usuários registrados'})
        }

        res.status(200).json({allUsers})
    }

    static async getUserById(req, res) {
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({message: 'ID Inválido'})
        }

        const user = await User.findById(id, '-password')  

        if(!user) {
            return res.status(400).json({message: 'Usuário não encontrado'})
        }

        res.status(200).json({user})
    }

    static async updateUser(req, res) {
        //pega os campos do usuário e verifica se ao menos um foi fornecido;
        const { name, email, password, confirmPassword } = req.body
        if(!name && !email && !password && !confirmPassword) {
            return res.status(422).json({message: 'Preencha ao menos um item a ser atualizado'})
        }

        //pega o id do usuário a partir do parametro de rota e verifican se o ID é válido
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({message: 'ID Inválido'})
        }

        try {
            //pega o usuário e verifica se ele existe a partir de seu ID
            const user = await User.findById(id,'-password')
            if(!user) {
                return res.status(400).json({message: 'Usuário não encontrado'})
            }

            //atualiza campos de usuário APENAS se eles forem fornecidos
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

            //salva alterações
            await user.save()

            res.status(201).json({message: 'Usuário atualizado com sucesso!', user})
        } catch(error) {
            res.status(500).json({message: 'Ocorreu um erro ao tentar atualizar o usuário, tente novamente.'})
        }
    }
}