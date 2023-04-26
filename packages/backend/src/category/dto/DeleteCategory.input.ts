import { Field, InputType } from '@nestjs/graphql';
import { Schema } from 'mongoose';

@InputType()
export class DeleteCategoryInput {
	@Field(() => String, {description:"the id of category group is returned when created"})
	_id?: Schema.Types.ObjectId;
}