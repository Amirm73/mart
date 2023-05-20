import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { File } from './file.model';

@ObjectType()
@Schema()
export class Image extends File {
  @Field(() => String, {
    nullable: true,
    description: 'an explanation of the image,only visible on mouse-over',
  })
  @Prop()
  title?: string;

  @Field(() => String, {
    nullable: true,
    description: 'describe the visual elements of the image to the search engine crawlers',
  })
  @Prop()
  alt?: string;
}


export type IImageDocument = Image & Document;

export const ImageSchema = SchemaFactory.createForClass(Image);
