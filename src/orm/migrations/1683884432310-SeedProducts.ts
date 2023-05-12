import { MigrationInterface, QueryRunner } from "typeorm"
import { mysqlDataSource } from "../data-source"
import { Product } from "../entity/product.entity"

export class SeedProducts1683884432310 implements MigrationInterface {

  public async up(): Promise<any> {
    let product = new Product()
    const productRepository = mysqlDataSource.getRepository(Product)

    product.id = 1000,
    product.code = "f230fh0g3",
    product.name = "Bamboo Watch",
    product.description = "Product Description",
    product.image = "bamboo-watch.jpg",
    product.price = 65,
    product.category = "Accessories",
    product.quantity = 24,
    product.inventoryStatus = "INSTOCK",
    product.rating = 5
    await productRepository.save(product)

    product = new Product()
    product.id = 1001,
    product.code = "nvklal433",
    product.name = "Black Watch",
    product.description = "Product Description",
    product.image = "black-watch.jpg",
    product.price = 72,
    product.category = "Accessories",
    product.quantity = 61,
    product.inventoryStatus = "INSTOCK",
    product.rating = 4
    await productRepository.save(product)

    product = new Product()
    product.id = 1002,
    product.code = "zz21cz3c1",
    product.name = "Blue Band",
    product.description = "Product Description",
    product.image = "blue-band.jpg",
    product.price = 79,
    product.category = "Fitness",
    product.quantity = 2,
    product.inventoryStatus = "LOWSTOCK",
    product.rating = 3
    await productRepository.save(product)

    product = new Product()
    product.id = 1003,
    product.code = "244wgerg2",
    product.name = "Blue T-Shirt",
    product.description = "Product Description",
    product.image = "blue-t-shirt.jpg",
    product.price = 29,
    product.category = "Clothing",
    product.quantity = 25,
    product.inventoryStatus = "INSTOCK",
    product.rating = 5
    await productRepository.save(product)
    
    product = new Product()
    product.id = 1004,
    product.code = "h456wer53",
    product.name = "Bracelet",
    product.description = "Product Description",
    product.image = "bracelet.jpg",
    product.price = 15,
    product.category = "Accessories",
    product.quantity = 73,
    product.inventoryStatus = "INSTOCK",
    product.rating = 4
    await productRepository.save(product)

    product = new Product()
    product.id = 1005,
    product.code = "av2231fwg",
    product.name = "Brown Purse",
    product.description = "Product Description",
    product.image = "brown-purse.jpg",
    product.price = 120,
    product.category = "Accessories",
    product.quantity = 0,
    product.inventoryStatus = "OUTOFSTOCK",
    product.rating = 4
    await productRepository.save(product)

    product = new Product()
    product.id = 1006,
    product.code = "bib36pfvm",
    product.name = "Chakra Bracelet",
    product.description = "Product Description",
    product.image = "chakra-bracelet.jpg",
    product.price = 32,
    product.category = "Accessories",
    product.quantity = 5,
    product.inventoryStatus = "LOWSTOCK",
    product.rating = 3
    await productRepository.save(product)

    product = new Product()
    product.id = 1007,
    product.code = "mbvjkgip5",
    product.name = "Galaxy Earrings",
    product.description = "Product Description",
    product.image = "galaxy-earrings.jpg",
    product.price = 34,
    product.category = "Accessories",
    product.quantity = 23,
    product.inventoryStatus = "INSTOCK",
    product.rating = 5
    await productRepository.save(product)

    product = new Product()
    product.id = 1008,
    product.code = "vbb124btr",
    product.name = "Game Controller",
    product.description = "Product Description",
    product.image = "game-controller.jpg",
    product.price = 99,
    product.category = "Electronics",
    product.quantity = 2,
    product.inventoryStatus = "LOWSTOCK",
    product.rating = 4
    await productRepository.save(product)

    product = new Product()
    product.id = 1009,
    product.code = "cm230f032",
    product.name = "Gaming Set",
    product.description = "Product Description",
    product.image = "gaming-set.jpg",
    product.price = 299,
    product.category = "Electronics",
    product.quantity = 63,
    product.inventoryStatus = "INSTOCK",
    product.rating = 3
    await productRepository.save(product)

    product = new Product()
    product.id = 1010,
    product.code = "plb34234v",
    product.name = "Gold Phone Case",
    product.description = "Product Description",
    product.image = "gold-phone-case.jpg",
    product.price = 24,
    product.category = "Accessories",
    product.quantity = 0,
    product.inventoryStatus = "OUTOFSTOCK",
    product.rating = 4
    await productRepository.save(product)

    product = new Product()
    product.id = 1011,
    product.code = "4920nnc2d",
    product.name = "Green Earbuds",
    product.description = "Product Description",
    product.image = "green-earbuds.jpg",
    product.price = 89,
    product.category = "Electronics",
    product.quantity = 23,
    product.inventoryStatus = "INSTOCK",
    product.rating = 4
    await productRepository.save(product)

    product = new Product()
    product.id = 1012,
    product.code = "250vm23cc",
    product.name = "Green T-Shirt",
    product.description = "Product Description",
    product.image = "green-t-shirt.jpg",
    product.price = 49,
    product.category = "Clothing",
    product.quantity = 74,
    product.inventoryStatus = "INSTOCK",
    product.rating = 5
    await productRepository.save(product)

    product = new Product()
    product.id = 1013,
    product.code = "fldsmn31b",
    product.name = "Grey T-Shirt",
    product.description = "Product Description",
    product.image = "grey-t-shirt.jpg",
    product.price = 48,
    product.category = "Clothing",
    product.quantity = 0,
    product.inventoryStatus = "OUTOFSTOCK",
    product.rating = 3
    await productRepository.save(product)

    product = new Product()
    product.id = 1014,
    product.code = "waas1x2as",
    product.name = "Headphones",
    product.description = "Product Description",
    product.image = "headphones.jpg",
    product.price = 175,
    product.category = "Electronics",
    product.quantity = 8,
    product.inventoryStatus = "LOWSTOCK",
    product.rating = 5
    await productRepository.save(product)

    product = new Product()
    product.id = 1015,
    product.code = "vb34btbg5",
    product.name = "Light Green T-Shirt",
    product.description = "Product Description",
    product.image = "light-green-t-shirt.jpg",
    product.price = 49,
    product.category = "Clothing",
    product.quantity = 34,
    product.inventoryStatus = "INSTOCK",
    product.rating = 4
    await productRepository.save(product)

    product = new Product()
    product.id = 1016,
    product.code = "k8l6j58jl",
    product.name = "Lime Band",
    product.description = "Product Description",
    product.image = "lime-band.jpg",
    product.price = 79,
    product.category = "Fitness",
    product.quantity = 12,
    product.inventoryStatus = "INSTOCK",
    product.rating = 3
    await productRepository.save(product)

    product = new Product()
    product.id = 1017,
    product.code = "v435nn85n",
    product.name = "Mini Speakers",
    product.description = "Product Description",
    product.image = "mini-speakers.jpg",
    product.price = 85,
    product.category = "Clothing",
    product.quantity = 42,
    product.inventoryStatus = "INSTOCK",
    product.rating = 4
    await productRepository.save(product)

    product = new Product()
    product.id = 1018,
    product.code = "09zx9c0zc",
    product.name = "Painted Phone Case",
    product.description = "Product Description",
    product.image = "painted-phone-case.jpg",
    product.price = 56,
    product.category = "Accessories",
    product.quantity = 41,
    product.inventoryStatus = "INSTOCK",
    product.rating = 5
    await productRepository.save(product)

    product = new Product()
    product.id = 1019,
    product.code = "mnb5mb2m5",
    product.name = "Pink Band",
    product.description = "Product Description",
    product.image = "pink-band.jpg",
    product.price = 79,
    product.category = "Fitness",
    product.quantity = 63,
    product.inventoryStatus = "INSTOCK",
    product.rating = 4
    await productRepository.save(product)

    product = new Product()
    product.id = 1020,
    product.code = "r23fwf2w3",
    product.name = "Pink Purse",
    product.description = "Product Description",
    product.image = "pink-purse.jpg",
    product.price = 110,
    product.category = "Accessories",
    product.quantity = 0,
    product.inventoryStatus = "OUTOFSTOCK",
    product.rating = 4
    await productRepository.save(product)

    product = new Product()
    product.id = 1021,
    product.code = "pxpzczo23",
    product.name = "Purple Band",
    product.description = "Product Description",
    product.image = "purple-band.jpg",
    product.price = 79,
    product.category = "Fitness",
    product.quantity = 6,
    product.inventoryStatus = "LOWSTOCK",
    product.rating = 3
    await productRepository.save(product)

    product = new Product()
    product.id = 1022,
    product.code = "2c42cb5cb",
    product.name = "Purple Gemstone Necklace",
    product.description = "Product Description",
    product.image = "purple-gemstone-necklace.jpg",
    product.price = 45,
    product.category = "Accessories",
    product.quantity = 62,
    product.inventoryStatus = "INSTOCK",
    product.rating = 4
    await productRepository.save(product)

    product = new Product()
    product.id = 1023,
    product.code = "5k43kkk23",
    product.name = "Purple T-Shirt",
    product.description = "Product Description",
    product.image = "purple-t-shirt.jpg",
    product.price = 49,
    product.category = "Clothing",
    product.quantity = 2,
    product.inventoryStatus = "LOWSTOCK",
    product.rating = 5
    await productRepository.save(product)

    product = new Product()
    product.id = 1024,
    product.code = "lm2tny2k4",
    product.name = "Shoes",
    product.description = "Product Description",
    product.image = "shoes.jpg",
    product.price = 64,
    product.category = "Clothing",
    product.quantity = 0,
    product.inventoryStatus = "INSTOCK",
    product.rating = 4
    await productRepository.save(product)

    product = new Product()
    product.id = 1025,
    product.code = "nbm5mv45n",
    product.name = "Sneakers",
    product.description = "Product Description",
    product.image = "sneakers.jpg",
    product.price = 78,
    product.category = "Clothing",
    product.quantity = 52,
    product.inventoryStatus = "INSTOCK",
    product.rating = 4
    await productRepository.save(product)

    product = new Product()
    product.id = 1026,
    product.code = "zx23zc42c",
    product.name = "Teal T-Shirt",
    product.description = "Product Description",
    product.image = "teal-t-shirt.jpg",
    product.price = 49,
    product.category = "Clothing",
    product.quantity = 3,
    product.inventoryStatus = "LOWSTOCK",
    product.rating = 3
    await productRepository.save(product)

    product = new Product()
    product.id = 1027,
    product.code = "acvx872gc",
    product.name = "Yellow Earbuds",
    product.description = "Product Description",
    product.image = "yellow-earbuds.jpg",
    product.price = 89,
    product.category = "Electronics",
    product.quantity = 35,
    product.inventoryStatus = "INSTOCK",
    product.rating = 3
    await productRepository.save(product)

    product = new Product()
    product.id = 1028,
    product.code = "tx125ck42",
    product.name = "Yoga Mat",
    product.description = "Product Description",
    product.image = "yoga-mat.jpg",
    product.price = 20,
    product.category = "Fitness",
    product.quantity = 15,
    product.inventoryStatus = "INSTOCK",
    product.rating = 5
    await productRepository.save(product)

    product = new Product()
    product.id = 1029,
    product.code = "gwuby345v",
    product.name = "Yoga Set",
    product.description = "Product Description",
    product.image = "yoga-set.jpg",
    product.price = 20,
    product.category = "Fitness",
    product.quantity = 25,
    product.inventoryStatus = "INSTOCK",
    product.rating = 8
    await productRepository.save(product)
    console.log(await productRepository.findBy({ id: 1029}))
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    console.log('Not implemented')
  }

}
