const router = require('express').Router()

const LoginController = require('../controllers/LoginController')
// const validateToken = require('../middlewares/authHandler.js')

// router.get('/user/:id', validateToken, LoginController.getUserById)
router.post('/auth/login', LoginController.login)

module.exports = router