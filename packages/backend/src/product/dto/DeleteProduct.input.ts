import { Field, InputType } from '@nestjs/graphql';
import { Schema } from 'mongoose';

@InputType()
export class DeleteProductInput {
	@Field(() => String, {description:"the id of Product group is returned when created"})
	_id?: Schema.Types.ObjectId;
}