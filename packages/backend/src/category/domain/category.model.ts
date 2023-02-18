
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { CategoryGroup } from 'src/category-group/category-group.model';
@ObjectType()
@Schema()
export class Category {
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

  @Field(() => CategoryGroup)
  @Prop()
  categoryGroup?: CategoryGroup;
}

export type UserDocument = CategoryGroup & Document;

export const UserSchema = SchemaFactory.createForClass(CategoryGroup);
