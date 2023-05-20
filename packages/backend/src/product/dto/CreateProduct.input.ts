import { Field, InputType } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { Schema } from 'mongoose';

@InputType()
export class CreateProductInput {
	@Field(() => String, {
		description:
			'this name is usually shown to user and is in native language',
	})
	name: string;

	@Field(() => String, {
		nullable:true,
		description:"for non english products usually there is a english name."
	})
	enName?: string;

	@Field(() => String, {
		nullable: true,
		description:"this description is shown in product catalog"
	})
	description?: string;

	@Field(() => GraphQLUpload, {
		nullable:true,
		description: "the official images of product"
	})
	imageUpload?: FileUpload

	@Field(() => [String], {
		defaultValue:[]
	})
	inventoryIds?: Schema.Types.ObjectId[];
}