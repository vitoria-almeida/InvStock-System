import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'

const app = express()
app.use(cors()) 
app.use(express.json())

import connectDB from './database/connection.js'
connectDB()

import AuthRegisterUserRoutes from './routes/AuthRegisterUserRoutes.js'
app.use(AuthRegisterUserRoutes)

import LoginRoutes from './routes/LoginRoutes.js'
app.use(LoginRoutes)

const port = 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})