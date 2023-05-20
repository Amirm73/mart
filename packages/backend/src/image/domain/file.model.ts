import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Schema as MongooseSchema } from "mongoose";
import { Mimetype } from "./imageMimetype.enum";

@ObjectType()
@Schema()
export class File {
  @Field(() => String,{
    nullable: true
  })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, {
	  description:'uri of image on the server'
  })
  @Prop()
  url: string;
  
  @Field(() => String, {
	  description:'uri of image on the server'
  })
  @Prop()
  directory: string;

  @Field(() => String, {
	  nullable: true,
	  description:"describing the content format, for example image/png"
  })
  @Prop()
  mimetype?: Mimetype

  @Field(() => String, {
	  nullable: true,
	  description:"the id of the user that uploaded image"
  })
  @Prop({type: MongooseSchema.Types.ObjectId, ref: 'User'})
  creatorId?:MongooseSchema.Types.ObjectId;
}


export type IFileDocument = File & Document;

export const FileSchema = SchemaFactory.createForClass(File);
