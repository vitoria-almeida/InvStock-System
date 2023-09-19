const router = require('express').Router()
const AuthRegisterUserController = require('../controllers/AuthRegisterUserController')

router.get('/', AuthRegisterUserController.init)
router.post('/auth/register/user', AuthRegisterUserController.registerUser)
router.get('/auth/users', AuthRegisterUserController.findAllUsers)
router.get('/auth/user/:id', AuthRegisterUserController.getUserById)
router.patch('/auth/user/:id', AuthRegisterUserController.updateUser)

module.exports = router