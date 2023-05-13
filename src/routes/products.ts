import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/products";
import { validateSchema } from "../middleware/validate";
import { getProductSchema, createProductSchema, updateProductSchema, deleteProductSchema } from "../validators/product.schema";

const router = Router()

router.get('/', getProducts)

router.get('/:id', validateSchema(getProductSchema), getProduct)

router.post('/', validateSchema(createProductSchema), createProduct)

router.patch('/:id', validateSchema(updateProductSchema), updateProduct)

router.delete('/:id', validateSchema(deleteProductSchema), deleteProduct)

export default router
