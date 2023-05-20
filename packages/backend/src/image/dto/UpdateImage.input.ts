import { Field, InputType } from "@nestjs/graphql";
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class UpdateImageInput {
  	@Field(() => String)
  	_id: MongooseSchema.Types.ObjectId;
 
	// @Field(() => String, {
	// 	nullable: true,
	// 	description:'location of image on the server'
	// })
	// url?: string;

	@Field(() => String, {
	  nullable: true,
	  description: 'an explanation of the image, only visible on mouse-over',
	})
	title?: string;
	
	@Field(() => String, {
	  nullable: true,
	  description: 'describe the visual elements of the image to the search engine crawlers',
	})
	alt?: string;
}