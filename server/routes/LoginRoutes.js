import express from 'express'
const router = express.Router()
import LoginController from '../controllers/LoginController.js'

router.post('/auth/login', LoginController.login)

export default router