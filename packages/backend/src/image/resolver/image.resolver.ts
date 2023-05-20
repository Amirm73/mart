import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";
import { Image } from '../domain/image.model';
import { CreateImageInput } from "../dto/CreateImage.input";
import { ListImagesInput } from "../dto/ListImages.input";
import { UpdateImageInput } from "../dto/UpdateImage.input";
import { ImageService } from "../service/image.service";

@Resolver(() => Image)
export class ImageResolver {
  constructor(private imageService: ImageService) {}

  @Mutation(() => Image)
  async CreateImage(@Args('createImageInput') createImageInput: CreateImageInput) {
    return this.imageService.createImage(createImageInput);
  }

  @Mutation(() => Image)
  async UpdateImage(@Args('updateImageInput') updateImageInput: UpdateImageInput) {
    return this.imageService.updateImage(updateImageInput);
  }

  @Query(() => Image, { name: 'Image' })
  async GetImageById(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.imageService.findImageById(_id);
  }

  @Query(() => [Image], { name: 'Image' })
  async ListImages(
    @Args('listImagesInput') listImagesInput: ListImagesInput,
  ) {
    return this.imageService.find(listImagesInput);
  }
  
  @Mutation(() => Image)
  async DeleteImage(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.imageService.deleteImage(_id);
  }
}
