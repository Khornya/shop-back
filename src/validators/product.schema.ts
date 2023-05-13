import { InferType, number, object, string } from 'yup'
import { mysqlDataSource } from '../orm/data-source'
import { inventoryStatuses, Product } from '../orm/entity/product.entity'

export const getProductSchema = object({
  params: object({
    id: number().required(),
  }).required(),
})

export const updateProductSchema = object({
  params: object({
    id: number().required(),
  }).required(),
  body: object({
    code: string().trim().max(255).optional(),
    name: string().trim().max(255).optional(),
    description: string().max(255).trim().optional(),
    image: string()
      .trim()
      .max(255)
      .matches(/^.*\.(jpg|gif|png|jpeg|svg|webp)$/)
      .optional(),
    price: number().optional(),
    category: string().trim().max(255).optional(),
    quantity: number().optional(),
    inventoryStatus: string().trim().oneOf(inventoryStatuses).optional(),
    rating: number().optional(),
  })
    .noUnknown()
    .required(),
})

export const deleteProductSchema = object({
  params: object({
    id: number().required(),
  }).required(),
})

export const createProductSchema = object({
  body: object({
    id: number()
      .test({
        test: async (value) => {
          return !value || !(await mysqlDataSource.getRepository(Product).findOneBy({ id: value }))
        },
      })
      .optional(),
    code: string().trim().max(255).required(),
    name: string().trim().max(255).required(),
    description: string().max(255).trim().required(),
    image: string()
      .trim()
      .max(255)
      .matches(/^.*\.(jpg|gif|png|jpeg|svg|webp)$/)
      .optional(),
    price: number().required(),
    category: string().trim().max(255).required(),
    quantity: number().required(),
    inventoryStatus: string().trim().oneOf(inventoryStatuses).required(),
    rating: number().optional(),
  }).required(),
})

export type GetProductRequest = InferType<typeof getProductSchema>
export type UpdateProductRequest = InferType<typeof updateProductSchema>
export type DeleteProductRequest = InferType<typeof deleteProductSchema>
export type CreateProductRequest = InferType<typeof createProductSchema>
