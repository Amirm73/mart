import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterClientInput {
  @Field()
  phone: string;

  @Field()
  password: string;
}
