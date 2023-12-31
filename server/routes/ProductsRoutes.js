import { Router } from 'express'
const router = Router()

import ProductsController from '../controllers/ProductsController.js'
import { authMiddleware } from '../middlewares/AuthorizationMiddleware.js' 

router.post('/auth/products', authMiddleware, ProductsController.createProduct)
router.get('/auth/products', ProductsController.findAllProducts)
router.get('/auth/products/search', ProductsController.searchByName)

export default router
