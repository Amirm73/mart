import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ListUserInput {
  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  address?: string;
}
