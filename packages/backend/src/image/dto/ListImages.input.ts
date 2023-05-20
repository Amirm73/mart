import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ListImagesInput {
  @Field(() => String, { nullable: true })
  directory?: string;
}
