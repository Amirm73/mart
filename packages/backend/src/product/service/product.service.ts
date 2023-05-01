import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import fs from 'fs';
import { Schema } from "mongoose";
import { Product } from "../domain/product.model";
import { DeleteProductInput } from "../dto/DeleteProduct.input";
import { FindProductInput } from "../dto/FindProduct.input";
import { UpdateProductInput } from "../dto/UpdateProduct.input";
import { ProductRepository } from "../repository/product.repository";
@Injectable()
export class ProductService {
	constructor(private ProductRepository: ProductRepository) { }

	async createProduct(name:string , enName?:string, description?:string, image?:Buffer, inventoryIds?:Schema.Types.ObjectId[]){
		// const imageUrl = await this.writeImageOnDisk(image, name)
		return await this.ProductRepository.create(name , enName, description, image, inventoryIds)
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
			&& found.inventoryIds.length > 0)
				throw new BadRequestException("You should remove inventories first")
		
		return await this.ProductRepository.delete(_id)
	}

	async writeImageOnDisk(image:Buffer, productName:string) {
		const timestamp = Date.now()
		const path = 'images/product/'+productName+'.'+timestamp
		fs.writeFileSync(path, image);	
		return path
	}
}