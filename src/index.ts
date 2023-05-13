import express, { Express } from 'express'
import { mysqlDataSource } from './orm/data-source'
import { SeedProducts1683884432310 } from './orm/migrations/1683884432310-SeedProducts'
import productsRouter from './routes/products'

const port = process.env.EXPRESS_PORT

// create and setup express app
const app: Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// register router
app.use('/products', productsRouter)

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
