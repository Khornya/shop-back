import { DataSource } from 'typeorm'
import { Product } from './entity/product.entity'
import { SeedProducts1683884432310 } from './migrations/1683884432310-SeedProducts'

export const mysqlDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [Product],
  migrations: [SeedProducts1683884432310],
  logging: true,
  synchronize: true
})
