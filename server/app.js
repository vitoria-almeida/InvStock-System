const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors()) 
app.use(express.json())

const AuthRegisterUserRoutes = require('./routes/AuthRegisterUserRoutes')
app.use(AuthRegisterUserRoutes)

const port = 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

require('./database/connection')