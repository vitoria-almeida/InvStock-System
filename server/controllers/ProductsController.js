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

    static async findAllProducts(req, res) {
        try {
            const allProducts = await Product.find()

            if(allProducts.length === 0) {
                return res.status(400).json({message: 'Não há produtos registrados'})
            }

            res.status(200).json({allProducts})         
        } catch(error) {
            res.status(500).json({message: error.message})
        }
    }
} 

export default ProductsController