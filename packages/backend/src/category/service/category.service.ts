import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Schema } from "mongoose";
import { Category } from "../domain/category.model";
import { CategoryRepository } from "../repository/category.repository";

@Injectable()
export class CategoryService{
	constructor( private categoryRepository: CategoryRepository ){}

	async createCategory(name: string, enName: string, categoryIds: Schema.Types.ObjectId[]){
		const found = await this.categoryRepository.findByName(name)
		if(found) throw new BadRequestException("category group is created before!")

		return await this.categoryRepository.create(name, enName, categoryIds)
	}

	async findCategory(_id:Schema.Types.ObjectId, name:string, enName:string){
		return await this.categoryRepository.find(_id,name, enName)
	}
	
	async updateCategory(_id:Schema.Types.ObjectId, name: string, enName: string, categoryIds: Schema.Types.ObjectId[]){
		return await this.categoryRepository.update(_id,name, enName, categoryIds)
	}

	async deleteCategory(_id:Schema.Types.ObjectId){
		const found = await this.categoryRepository.findById(_id) 
		if(!found) throw new NotFoundException("Not found category with this id: "+_id)
		
		if (found instanceof Category
			&& found.categoryIds.length > 0)
				throw new BadRequestException("You should remove children categories first")
		
		return await this.categoryRepository.delete(_id)
	}
}