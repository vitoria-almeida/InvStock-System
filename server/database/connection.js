import mongoose from 'mongoose'

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

const connectDB = () => {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.lbawnah.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
    .catch((e) => {
        console.log(e)
        process.exit(0)
    })
    const connection = mongoose.connection

    connection.on('error', () => {
        console.error('Failed to connect to MongoDB')
    })
    connection.on('open', () => {
        console.log('Successfully connected on MongoDB')
    })
}

export default connectDB;