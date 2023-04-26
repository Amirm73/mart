import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "../domain/product.model";
import { CreateProductInput } from "../dto/CreateProduct.input";
import { DeleteProductInput } from "../dto/DeleteProduct.input";
import { FindProductInput } from "../dto/FindProduct.input";
import { UpdateProductInput } from "../dto/UpdateProduct.input";
import { ProductRepository } from "../repository/product.repository";

@Injectable()
export class ProductService {
	constructor(private ProductRepository: ProductRepository) { }

	async createProduct({name, enName, ProductIds}:CreateProductInput){
		const found = await this.ProductRepository.findByName(name)
		if(found) throw new BadRequestException("Product group is created before!")

		return await this.ProductRepository.create(name, enName, ProductIds)
	}

	async findProduct( {_id, name, enName }:FindProductInput){
		return await this.ProductRepository.find(_id,name, enName)
	}
	
	async updateProduct( { _id, name, enName, ProductIds }:UpdateProductInput){
		return await this.ProductRepository.update(_id,name, enName, ProductIds)
	}

	async deleteProduct({_id}: DeleteProductInput){
		const found = await this.ProductRepository.findById(_id) 
		if(!found) throw new NotFoundException("Not found Product with this id: "+_id)
		
		if (found instanceof Product
			&& found.InventoryIds.length > 0)
				throw new BadRequestException("You should remove children categories first")
		
		return await this.ProductRepository.delete(_id)
	}
}