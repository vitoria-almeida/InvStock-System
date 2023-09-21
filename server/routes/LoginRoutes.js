import { Router } from 'express'
const router = Router()
import LoginController from '../controllers/LoginController.js'

router.post('/auth/login', LoginController.login)

export default router