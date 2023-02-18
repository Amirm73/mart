import { Field, InputType } from '@nestjs/graphql';
import { CategoryGroup } from 'src/category-group/category-group.model';

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

	@Field(() => [CategoryGroup], {
		defaultValue:[]
	})
	categoryGroupIds?: CategoryGroup[];
}