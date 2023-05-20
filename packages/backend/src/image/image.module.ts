import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Image, ImageSchema } from "./domain/image.model";
import { ImageRepository } from "./repository/image.repository";
import { ImageResolver } from "./resolver/image.resolver";
import { ImageService } from "./service/image.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }])
  ],
  providers: [ImageResolver, ImageService, ImageRepository],
  exports: [ImageService, ImageRepository]
})
export class ImageModule {}