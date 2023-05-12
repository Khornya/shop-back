import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  code!: string

  @Column()
  name!: string

  @Column()
  description!: string

  @Column()
  image!: string

  @Column()
  price!: number

  @Column()
  category!: string

  @Column()
  quantity!: number

  @Column()
  inventoryStatus!: string

  @Column()
  rating!: number
}
