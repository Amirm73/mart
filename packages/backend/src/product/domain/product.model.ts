
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@ObjectType()
@Schema()
export class Product {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, {
    nullable: true,
    description:
      'name of the product in native language',
  })
  @Prop()
  name: string;

  @Field(() => String, {
    nullable: true,
    description:
      'name of the product in native language',
  })
  @Prop()
  enName?: string;

  @Field(() => String, {
      nullable: true,
  })
  @Prop()
  description: string;

  @Field(() => [String], { defaultValue:[] })
  @Prop({ type: [String] })
  images: string[];

  @Field(() => [String], { defaultValue: [] })
  @Prop({type:[ MongooseSchema.Types.ObjectId], ref: 'Inventory'})
  InventoryIds?:MongooseSchema.Types.ObjectId[];
}


export type IProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);
