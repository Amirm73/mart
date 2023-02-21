import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {

	@Field(() => String, {
		nullable: true,
		description:
			'this name is usually shown to user and is in native language',
	})
	name?: string;

	@Field(() => String, {
		description:"for non english products usually there is a english name."
	})
	enName: string;

	@Field(() => [String], {
		defaultValue:[]
	})
	categoryGroupIds?: String[];
}