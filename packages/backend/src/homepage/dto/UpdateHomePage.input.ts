import { Field, InputType } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";
import { IHomeFigure } from "../domain/homeFigure.interface ";
import { IHomePhotos } from "../domain/homePhoto.interface";
import { IHomeProduct } from "../domain/homeProduct.interface";

@InputType()
export class UpdateHomePageInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => IHomePhotos, {
    nullable: true,
    description: 'banners and sliders of the home page',
  })
  photos:IHomePhotos ;

  @Field(() => IHomeProduct, {
    nullable: true,
    description: 'products of home page like incredible, most viewed, etc',
  })
  products: IHomeProduct;

  @Field(() => IHomeFigure , {
    nullable: true,
    description: 'figures of home page like brands and services',
  })
  figures: IHomeFigure;
}