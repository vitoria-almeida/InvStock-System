const router = require('express').Router()
const AuthRegisterUserController = require('../controllers/AuthRegisterUserController')

router.get('/', AuthRegisterUserController.init)
router.post('/auth/register/user', AuthRegisterUserController.registerUser)
router.get('/auth/users', AuthRegisterUserController.findAllUsers)
router.get('/auth/user/:id', AuthRegisterUserController.getUserById)

module.exports = router