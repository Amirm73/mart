
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { IHomeFigure } from './homeFigure.interface ';
import { IHomePhotos } from './homePhoto.interface';
import { IHomeProduct } from './homeProduct.interface';

/**
 * @returns 
   homepage: {
		banners: {
			sliders: [
				image: {
					url:"",
					title:"",
					alt:""
				},
				pageUrl:""
			],
			banner
		},
		products: {
			incredible:[	
				product:{
					image:{...},
					normalPrice,
					salePrice,
			}],
			topView:[
				product:{
					...
				}
			],
			bestSelling:[
				product:{
					...
				}
			],
		}

	}
 */

@ObjectType({
	description:"save home-page needed data for one query and lean response"
})
@Schema()
export class HomePage {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
  
  @Field(() => IHomePhotos, {
    nullable: true,
    description: 'banners of home page',
  })
  @Prop()
  photos?:IHomePhotos ;

  @Field(() => IHomeProduct, {
    nullable: true,
    description: 'products of home page like incredible, most viewed, etc',
  })
  @Prop()
  products?: IHomeProduct;

  @Field(() => IHomeFigure , {
    nullable: true,
    description: 'figures of home page like brands and services',
  })
  @Prop()
  figures?: IHomeFigure;
}



export type IHomePageDocument = HomePage & Document;

export const HomePageSchema = SchemaFactory.createForClass(HomePage,);
