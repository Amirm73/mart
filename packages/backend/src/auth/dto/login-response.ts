import { ObjectType, Field } from "@nestjs/graphql";
import { User } from "src/user/domain/user.model";


@ObjectType()
export class LoginResponse{
  @Field()
  access_Token: String

  @Field(() => User)
  user: User
}