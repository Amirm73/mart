import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema } from "mongoose";
import { IImageDocument, Image } from "../domain/image.model";
import { Mimetype } from "../domain/imageMimetype.enum";

@Injectable()
export class ImageRepository{
	constructor(
		@InjectModel(Image.name) private ImageModel:Model<IImageDocument> 
	){}

	async create(url:string, mimetype?:Mimetype, title?: string, alt?: string, directory="", creatorId?: Schema.Types.ObjectId) {
		const created = new this.ImageModel({ url,  mimetype, title, alt, directory, creatorId })
		return await created.save()
	}

	async update(_id: Schema.Types.ObjectId,
		url?: string, title?: string, alt?: string ) {
		return await this.ImageModel.findByIdAndUpdate(_id, { url, title, alt },{new:true})
	}

	async delete(_id: Schema.Types.ObjectId) {
		return await this.ImageModel.findByIdAndDelete(_id)
		//TODO: CHECK relations and soft delete
	}

	async find(directory:string) {
		return await this.ImageModel.find({directory})
	}

	async findByUrl(url?:string) {
		return await this.ImageModel.findOne({ url })
	}

	async findById(_id: Schema.Types.ObjectId) {
		return await this.ImageModel.findById(_id)
	}
}