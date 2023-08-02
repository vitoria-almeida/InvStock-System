const mongoose = require('mongoose')

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

const connect = () => {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.lbawnah.mongodb.net/test?retryWrites=true&w=majority`)
    const connection = mongoose.connection

    connection.on('error', () => {
        console.error('Failed to connect to MongoDB')
    })
    connection.on('open', () => {
        console.log('Successfully connected on MongoDB')
    })
}
connect()

module.exports = mongoose;