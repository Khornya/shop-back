import { NextFunction, Request, Response } from 'express'
import { Schema, ValidationError } from 'yup'

export const validateSchema = (schema: Schema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validate(
      {
        body: req.body,
        query: req.query,
        params: req.params,
      }
    )
    return next()
  } catch (err) {
    return res.status(400).json({ type: (err as ValidationError).name, message: (err as ValidationError).message })
  }
}
