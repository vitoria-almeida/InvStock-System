const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors()) 
app.use(express.json())

const LoginRoutes = require('./routes/LoginRoutes')
app.use(LoginRoutes)

const AuthRegisterUserRoutes = require('./routes/AuthRegisterUserRoutes')
app.use(AuthRegisterUserRoutes)

const port = 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

const connectDB = require('./database/connection')
connectDB()