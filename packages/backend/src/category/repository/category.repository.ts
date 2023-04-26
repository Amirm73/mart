import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema } from "mongoose";
import { Category, ICategoryDocument } from "../domain/category.model";

@Injectable()
export class CategoryRepository{
	constructor(
		@InjectModel(Category.name) private readonly CategoryModel:Model<ICategoryDocument> 
	){}

	async create(name: string, enName: string, categoryIds: Schema.Types.ObjectId[]) {
			const created = new this.CategoryModel({name, enName, categoryIds})
			return await created.save()
	}

	async update(_id: Schema.Types.ObjectId, name:string, enName:string, categoryIds:Schema.Types.ObjectId[]) {
		return await this.CategoryModel.findByIdAndUpdate(_id,{name,enName,categoryIds},{new:true})
	}

	async delete(_id: Schema.Types.ObjectId) {
		return await this.CategoryModel.findByIdAndDelete(_id)
	}

	async find(_id?: Schema.Types.ObjectId, name?:string, enName?:string) {
		return await this.CategoryModel.findOne({_id, name, enName})
	}

	async findByName(name?:string) {
		return await this.CategoryModel.findOne({ name })
	}

	async findById(_id: Schema.Types.ObjectId) {
		return await this.CategoryModel.findById(_id)
	}
}