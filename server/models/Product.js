import mongoose from 'mongoose'

const Product = mongoose.model('Product', {
    productName: {
        type: String,
        unique: [true, "Esse produto já está cadastrado"],
        required: [true, "É necessário colocar um nome!"],
        set: (value) => {
            return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
        }
    },
    quantity: {
        type: Number,
        required: [true, "É necessário preencher o valor!"]
    },
    price: {
        type: Number,
        required: [true, "É necessário preencher o valor!"]
    },
    sellingPrice: {
        type: Number,
        required: [true, "É necessário preencher o valor!"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

export default Product