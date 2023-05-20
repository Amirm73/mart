import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
@ObjectType()
@Schema()
export class Product {
  @Field(() => String,{
    nullable: true
  })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, {
    nullable: true,
    description: 'name of the product in native language',
  })
  @Prop()
  name?: string;

  @Field(() => String, {
    nullable: true,
    description: 'name of the product in English language',
  })
  @Prop()
  enName?: string;

  @Field(() => String, {
    nullable: true,
	  description:"usually for non-english named products, there is an english name."
  })
  @Prop()
  description?: string;

  @Field(() => String, {
    nullable: true
  })
  @Prop()
  image?: string

  @Field(() => [String], {
    defaultValue: []
  })
  @Prop({type:[ MongooseSchema.Types.ObjectId], ref: 'Inventory'})
  inventoryIds?:MongooseSchema.Types.ObjectId[];
}


export type IProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);
