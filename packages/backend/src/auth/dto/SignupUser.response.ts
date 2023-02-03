import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SignupResponse {
  @Field(() => String, { nullable: true })
  password?: number;
}
