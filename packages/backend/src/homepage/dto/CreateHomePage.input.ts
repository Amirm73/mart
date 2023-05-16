import { Field, InputType } from "@nestjs/graphql";
import { IHomeFigure } from "../domain/homeFigure.interface ";
import { IHomePhotos } from "../domain/homePhoto.interface";
import { IHomeProduct } from "../domain/homeProduct.interface";

@InputType()
export class CreateHomePageInput {
  @Field(() => IHomePhotos, {
    nullable: true,
    description: 'banners of home page',
  })
  photos?:IHomePhotos ;

  @Field(() => IHomeProduct, {
    nullable: true,
    description: 'products of home page like incredible, most viewed, etc',
  })
  products?: IHomeProduct;

  @Field(() => IHomeFigure , {
    nullable: true,
    description: 'figures of home page like brands and services',
  })
  figures?: IHomeFigure;
}
