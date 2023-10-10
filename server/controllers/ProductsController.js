import Product from "../models/Product.js"

class ProductsController {
    static async createProduct(req, res) {
        try {
            const { productName, quantity, price, sellingPrice } = req.body

            if(!productName) {
                return res.status(422).json({message: 'O nome do produto é obrigatório'})
            }
            if(!quantity) {
                return res.status(422).json({message: 'A quantidade do produto é obrigatória'})
            }
            if(!price) {
                return res.status(422).json({message: 'O preço do produto é obrigatório'})
            }
            if(!sellingPrice) {
                return res.status(422).json({message: 'O preço de venda do produto é obrigatório'})
            }

            const product = new Product({
                productName, 
                quantity, 
                price, 
                sellingPrice,
                userId: req.userId
            })

            await product.save()

            res.status(201).json({message: 'Produto cadastrado com sucesso!'})         
        } catch(error) {
            res.status(500).json({message: error.message})
        }
    }

    static async countProducts(req, res) {
        try {
            const countAllProducts = await Product.countDocuments()
            return countAllProducts
        } catch(error) {
            res.status(500).json({message: error.message})
        }
    }

    static async findAllProducts(req, res) {
        try {
            let { limit, offset } = req.query

            limit = Number(limit)
            offset = Number(offset)

            if(!limit) {
                limit = 5
            } if(!offset) {
                offset = 0
            }

            const allProducts = await Product.find().skip(offset).limit(limit).populate('userId')

            const total = await ProductsController.countProducts()

            const currentUrl = req.baseUrl

            const next = offset + limit
            const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null
        
            const previous = offset - limit < 0 ? null : offset - limit
            const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null

            if (allProducts.length === 0) {
                return res.status(400).json({message: 'Não há produtos registrados'})
            }

            res.status(200).json({
                nextUrl,
                previousUrl,
                limit,
                offset,
                total,

                results: allProducts.map(item => ({
                    id: item._id,
                    name: item.productName,
                    quantity: item.quantity,
                    price: item.price,
                    selling: item.sellingPrice,
                    date: item.createdAt,
                    user: item.userId
                }))
            })         
        } catch(error) {
            res.status(500).json({message: error.message})
        }
    }
} 

export default ProductsController