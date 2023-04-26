
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
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

  @Field(() => String, {
      nullable: true,
  })
  @Prop()
  enName?: string;

  @Field(() => [String], { defaultValue: [] })
  @Prop({type:[ MongooseSchema.Types.ObjectId], ref: 'Category'})
  categoryIds?:MongooseSchema.Types.ObjectId[];
}

export type ICategoryDocument = Category & Document;

export const CategorySchema = SchemaFactory.createForClass(Category);
