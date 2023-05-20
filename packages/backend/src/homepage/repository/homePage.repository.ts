import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model, Schema } from "mongoose"
import { IHomeFigure } from "../domain/homeFigure.interface "
import { HomePage, IHomePageDocument } from "../domain/homePage.model"
import { IHomePhotos } from "../domain/homePhoto.interface"
import { IHomeProduct } from "../domain/homeProduct.interface"

@Injectable()
export class HomePageRepository{
	constructor(
		@InjectModel(HomePage.name) private readonly HomePageModel:Model<IHomePageDocument> 
	){}

	async create( banners?:IHomePhotos, products?: IHomeProduct, figures?: IHomeFigure
	) {
		const created = new this.HomePageModel({ banners, products, figures })
		return await created.save()
	}

	async update(_id: Schema.Types.ObjectId,
		banners:IHomePhotos, products: IHomeProduct, figures: IHomeFigure) {
			
		return await this.HomePageModel.findByIdAndUpdate(
			_id, { banners, products, figures }, { new: true }
		)
	}

	async get() {
		return await this.HomePageModel.findOne()
	}
}