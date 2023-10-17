import { Router } from 'express'
const router = Router()
import AuthRegisterUserController from '../controllers/AuthRegisterUserController.js'
import { validId, validUser } from '../middlewares/GlobalMiddlewares.js'

router.get('/', AuthRegisterUserController.init)
router.post('/auth/register/user', AuthRegisterUserController.registerUser)
router.get('/auth/users', AuthRegisterUserController.findAllUsers)
router.get('/auth/user/:id?', validId, validUser, AuthRegisterUserController.getUserById)
router.patch('/auth/user/:id', validId, validUser, AuthRegisterUserController.updateUser)

export default router