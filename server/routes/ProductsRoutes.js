import { Router } from 'express'
const router = Router()

import ProductsController from '../controllers/ProductsController.js'

router.post('/auth/products', ProductsController.createProduct)
router.get('/auth/products', ProductsController.findAllProducts)

export default router
