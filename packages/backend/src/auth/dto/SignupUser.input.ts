import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignupUserInput {
  @Field()
  phone: string;
}
