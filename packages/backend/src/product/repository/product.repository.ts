import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema } from "mongoose";
import { IProductDocument, Product } from "../domain/product.model";

@Injectable()
export class ProductRepository{
	constructor(
		@InjectModel(Product.name) private readonly ProductModel:Model<IProductDocument> 
	){}

	async create(name: string, enName: string, ProductIds: Schema.Types.ObjectId[]) {
			const created = new this.ProductModel({name, enName, ProductIds})
			return await created.save()
	}

	async update(_id: Schema.Types.ObjectId, name:string, enName:string, ProductIds:Schema.Types.ObjectId[]) {
		return await this.ProductModel.findByIdAndUpdate(_id,{name,enName,ProductIds},{new:true})
	}

	async delete(_id: Schema.Types.ObjectId) {
		return await this.ProductModel.findByIdAndDelete(_id)
	}

	async find(_id?: Schema.Types.ObjectId, name?:string, enName?:string) {
		return await this.ProductModel.findOne({_id, name, enName})
	}

	async findByName(name?:string) {
		return await this.ProductModel.findOne({ name })
	}

	async findById(_id: Schema.Types.ObjectId) {
		return await this.ProductModel.findById(_id)
	}
}