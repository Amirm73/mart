import { Field, InputType } from '@nestjs/graphql';
import { Schema } from 'mongoose';

@InputType()
export class UpdateCategoryInput {
	@Field(() => String, {description:"the id of category group is returned when created"})
	_id?: Schema.Types.ObjectId;
	
	@Field(() => String, {
		nullable: true,
		description:
			'this name is usually shown to user and is in native language',
	})
	name?: string;

	@Field(() => String, {
		nullable: true,
		description:"for non english products usually there is a english name."
	})
	enName: string;

	@Field(() => [String], {
		defaultValue:[]
	})
	categoryIds?: Schema.Types.ObjectId[];
}