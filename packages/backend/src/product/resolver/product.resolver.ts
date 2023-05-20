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
	async createProduct(@Args('createProductInput') {name , enName, description, imageUpload, inventoryIds}:CreateProductInput) {
		return this.ProductService.createProduct(name , enName, description, imageUpload, inventoryIds)	
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