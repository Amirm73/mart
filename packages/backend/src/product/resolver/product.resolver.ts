import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Product } from "../domain/product.model";
import { CreateProductInput } from "../dto/CreateProduct.input";
import { DeleteProductInput } from "../dto/DeleteProduct.input";
import { UpdateProductInput } from "../dto/UpdateProduct.input";
import { ProductService } from "../service/product.service";

@Resolver()
export class ProductResolver{
	constructor(private readonly ProductService: ProductService) {}

	@Mutation(()=> Product)
	async createProduct(@Args('createProductInput') createProductInput:CreateProductInput) {
		return this.ProductService.createProduct(createProductInput)	
	}

	@Query(()=> Product)
	async findProduct(@Args('findProductInput') findProductInput) {
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