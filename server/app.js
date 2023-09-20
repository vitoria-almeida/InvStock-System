import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'


const app = express()
app.use(cors()) 
app.use(express.json())

import LoginRoutes from './routes/LoginRoutes.js'
app.use(LoginRoutes)

import AuthRegisterUserRoutes from './routes/AuthRegisterUserRoutes.js'
app.use(AuthRegisterUserRoutes)

const port = 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

import connectDB from './database/connection.js'
connectDB()