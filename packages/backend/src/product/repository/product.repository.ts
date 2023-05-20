import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema } from "mongoose";
import { IProductDocument, Product } from "../domain/product.model";
@Injectable()
export class ProductRepository{
	constructor(
		@InjectModel(Product.name) private readonly ProductModel:Model<IProductDocument> 
	){}

	async create(name: string, enName: string,description:string, imageURL: string, inventoryIds: Schema.Types.ObjectId[]) {
		const created = new this.ProductModel({ name, enName, description, image: imageURL, inventoryIds })
		return await created.save()
	}

	async update(_id: Schema.Types.ObjectId, name:string, enName:string, inventoryIds:Schema.Types.ObjectId[]) {
		return await this.ProductModel.findByIdAndUpdate(_id,{name,enName,inventoryIds},{new:true})
	}

	async delete(_id: Schema.Types.ObjectId) {
		return await this.ProductModel.findByIdAndDelete(_id)
	}

	async find(_id?: Schema.Types.ObjectId, name?:string, enName?:string) {
		// const res = await this.ProductModel.find({_id, name, enName})
		const res = await this.ProductModel.findById(_id)
		return res 
	}

	async findByName(name?:string) {
		return await this.ProductModel.findOne({ name })
	}

	async findById(_id: Schema.Types.ObjectId) {
		return await this.ProductModel.findById(_id)
	}
}