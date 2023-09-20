const router = require('express').Router()
const AuthRegisterUserController = require('../controllers/AuthRegisterUserController')
const { validId, validUser } = require('../middlewares/GlobalMiddlewares')

router.get('/', AuthRegisterUserController.init)
router.post('/auth/register/user', AuthRegisterUserController.registerUser)
router.get('/auth/users', AuthRegisterUserController.findAllUsers)
router.get('/auth/user/:id', validId, validUser, AuthRegisterUserController.getUserById)
router.patch('/auth/user/:id', validId, validUser, AuthRegisterUserController.updateUser)

module.exports = router