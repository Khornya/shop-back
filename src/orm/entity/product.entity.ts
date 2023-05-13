import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

export const inventoryStatuses = ['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK'] as const
export type InventoryStatus = (typeof inventoryStatuses)[number]

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

  @Column({ nullable: true })
  image?: string

  @Column()
  price!: number

  @Column()
  category!: string

  @Column()
  quantity!: number

  @Column()
  inventoryStatus!: InventoryStatus

  @Column({ nullable: true })
  rating?: number
}
