import { BadRequestException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Product } from "../domain/product.model";
import { CreateProductInput } from "../dto/CreateProduct.input";
import { DeleteProductInput } from "../dto/DeleteProduct.input";
import { FindProductInput } from "../dto/FindProduct.input";
import { UpdateProductInput } from "../dto/UpdateProduct.input";
import { ProductService } from "../service/product.service";

@Resolver()
export class ProductResolver{
	constructor(private readonly ProductService: ProductService) {}

	@Mutation(()=> Product)
	async createProduct(@Args('createProductInput') {name , enName, description, image, inventoryIds}:CreateProductInput) {
		if(!image) 
			return this.ProductService.createProduct(name , enName, description, undefined, inventoryIds)	
		
		// read and store image as Buffer
		const imageObject = await image
		let readStream = imageObject.createReadStream()
		let data = ''
		let bufferImage: Buffer;
		readStream.once('error', (err: any) => {
			throw new BadRequestException(err.message)
		})
		readStream.on('data', (chunk: string) => (data += chunk))
		readStream.on('end', () => {
			bufferImage = Buffer.from(data, 'binary')
			return this.ProductService.createProduct(name , enName, description, bufferImage, inventoryIds)	
		})
	}

	@Query(()=> Product)
	async findProduct(@Args('findProductInput') findProductInput:FindProductInput) {
		return this.ProductService.findProduct(findProductInput)	
	}
	
	@Mutation(() => Product)
	async updateProduct(@Args('updateProductInput') updateProductInput:UpdateProductInput) {
		return this.ProductService.updateProduct(updateProductInput)	
	}
	
	@Mutation(() => Product )
	async deleteProduct(@Args('deleteProductInput') deleteProductInput:DeleteProductInput) {
		return this.ProductService.deleteProduct(deleteProductInput)	
	}
}