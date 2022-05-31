import { InputType, Field } from "@nestjs/graphql";


@InputType()
export class LoginUserInput{
  @Field()
  phone: string

  @Field()
  password: string
}
