import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  email: string;

  @Field(() => String)
  @Prop()
  userName: string;

  @Field(() => String)
  @Prop()
  password: string;

  @Field(() => String, { nullable: true })
  @Prop()
  firstName: string;

  @Field(() => String, { nullable: true })
  @Prop()
  lastName?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  nationalCode?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  phone?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  address?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  avatar?: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
