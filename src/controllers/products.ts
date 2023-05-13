import { Request, Response } from 'express'
import { mysqlDataSource } from "../orm/data-source"
import { Product } from "../orm/entity/product.entity"
import { CreateProductRequest, DeleteProductRequest, GetProductRequest, UpdateProductRequest } from '../validators/product.schema'

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await mysqlDataSource.getRepository(Product).find()
    return res.json(products)
  } catch (e) {
    res.sendStatus(500)
  }
}

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = (req as unknown as GetProductRequest).params
    const product = await mysqlDataSource.getRepository(Product).findOneBy({ id })
    if (!product) return res.sendStatus(404)
    return res.send(product)
  } catch (e) {
    res.sendStatus(500)
  }
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = (req as unknown as CreateProductRequest).body
    const newProduct = mysqlDataSource.getRepository(Product).create(product)
    const result = await mysqlDataSource.getRepository(Product).save(newProduct)
    return res.send(result)
  } catch (e) {
    res.sendStatus(500)
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    if (req.body.id) return res.sendStatus(400)
    const { params, body } = req as unknown as UpdateProductRequest
    const product = await mysqlDataSource.getRepository(Product).findOneBy({ id: params.id })
    if (!product) return res.sendStatus(404)
    mysqlDataSource.getRepository(Product).merge(product, body)
    const result = await mysqlDataSource.getRepository(Product).save(product)
    return res.send(result)
  } catch (e) {
    res.sendStatus(500)
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = (req as unknown as DeleteProductRequest).params
    const product = await mysqlDataSource.getRepository(Product).findOneBy({ id })
    if (!product) return res.sendStatus(404)
    const result = await mysqlDataSource.getRepository(Product).delete(id)
    return res.send(result)
  } catch (e) {
    res.sendStatus(500)
  }
}
