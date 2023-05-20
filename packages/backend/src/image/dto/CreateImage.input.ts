import { Field, InputType } from "@nestjs/graphql";
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { Mimetype } from "../domain/imageMimetype.enum";

@InputType()
export class CreateImageInput {
	@Field(() => GraphQLUpload, {
		nullable:true,
		description: "the official images of product"
	})
	fileUpload?: FileUpload

	@Field(() => String, {
		description:'location of image on the server'
	})
	directory?: string;

	@Field(() => String, {
		description:'location of image on the server'
	})
	fileName?: string;

	@Field(() => String, {
		nullable: true,
		description:"describing the content format, for example image/png"
	})
	mimetype?: Mimetype

	@Field(() => String, {
	  nullable: true,
	  description: 'an explanation of the image,only visible on mouse-over',
	})
	title?: string;
	
	@Field(() => String, {
	  nullable: true,
	  description: 'describe the visual elements of the image to the search engine crawlers',
	})
	alt?: string;
}