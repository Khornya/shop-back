import express, { Express, Request, Response } from 'express'
import { mysqlDataSource } from './src/orm/data-source'
import { Product } from './src/orm/entity/product.entity'
import { SeedProducts1683884432310 } from './src/orm/migrations/1683884432310-SeedProducts'

const port = process.env.EXPRESS_PORT

// create and setup express app
const app: Express = express()
app.use(express.json())

// establish database connection
mysqlDataSource
  .initialize()
  .then(async () => {
    console.log('Data Source has been initialized!')
    new SeedProducts1683884432310().up()
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err)
  })


// start express server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
