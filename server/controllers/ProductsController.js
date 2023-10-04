import Product from "../models/Product.js"

class ProductsController {
    static async createProduct(req, res) {
        try {
            //o id do usuário é um dos componentes do token gerado no login, 
            //portanto é desse token que retornamos no login que devemos pegar o id do usuário
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
                id: 'id Fake 1'
            })

            await product.save()

            res.status(201).json({message: 'Produto cadastrado com sucesso!'})         
        } catch(error) {
            res.status(500).json({message: error.message})
        }
    }

    static async findAllProducts(req, res) {
        try {
            const products = []
            res.status(200).json({products})         
        } catch(error) {
            res.status(500).json({message: error.message})
        }
    }
} 

export default ProductsController