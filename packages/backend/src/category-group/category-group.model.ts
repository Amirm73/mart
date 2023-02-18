
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Category } from 'src/category/domain/category.model';
@ObjectType()
@Schema()
export class CategoryGroup {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, {
    nullable: true,
    description:
      'email is not mandatory for ease of registration and is filled out later',
  })
  @Prop()
  name?: string;

  @Field(() => String)
  @Prop()
  enName: string;

  @Field(() => [], { defaultValue: [] })
  @Prop()
  categories?: Category[];
}

export type UserDocument = CategoryGroup & Document;

export const UserSchema = SchemaFactory.createForClass(CategoryGroup);
