import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  phone: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  nationalCode?: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => String, { nullable: true })
  avatar?: string;
}
