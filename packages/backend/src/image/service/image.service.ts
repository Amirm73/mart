import { Injectable, NotAcceptableException } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { Schema as MongooseSchema } from 'mongoose';
import { Mimetype } from '../domain/imageMimetype.enum';
import { IUploadedImage } from '../domain/uploadedImage.interface';
import { CreateImageInput } from '../dto/CreateImage.input';
import { ListImagesInput } from '../dto/ListImages.input';
import { UpdateImageInput } from '../dto/UpdateImage.input';
import { ImageRepository } from '../repository/image.repository';

@Injectable()
export class ImageService {
  constructor(private imageRepository: ImageRepository) { }

  async createImage({fileName, fileUpload, title, alt, directory, }: CreateImageInput) {
    // TODO: set creatorId
    const imageObject: IUploadedImage = await fileUpload 
    this.checkMimetype(imageObject.mimetype)
    
    const url = await this.writeImageOnDisk( imageObject, fileName, directory, null )
    return this.imageRepository.create(url, imageObject.mimetype, title, alt, "/slider/", null);
  }

  async findImageById(_id: MongooseSchema.Types.ObjectId) {
    return await this.imageRepository.findById(_id);
  }

  async findImageByUrl(url: string) {
    return await this.imageRepository.findByUrl(url);
  }

  async find({ directory } : ListImagesInput) {
    return await this.imageRepository.find(directory);
  }

  async updateImage({_id, title, alt }:UpdateImageInput) {
    return await this.imageRepository.update(_id, title, alt );
  }

  async deleteImage(_id: MongooseSchema.Types.ObjectId) {
    // TODO: CHECK ALL EMBEDDED IMAGES LIke profiles and home page banners
    // 
    return await this.imageRepository.delete(_id);
  }

  async writeImageOnDisk(image: IUploadedImage, imageName?: string, directory?: string, creatorId?:MongooseSchema.Types.ObjectId) {
    const path = this.makePath(image, imageName, directory)
    image.createReadStream()
      .pipe(
        createWriteStream(
          "public/" + path
        )
      )
    
		return path
	}

	private makePath( image:IUploadedImage, name ="uploadedImage", directory = "") {
		const format = Mimetype[image.mimetype]
		const date = new Date().toISOString()
		return directory + name + '.' + date + '.' + format
  }
  
  private checkMimetype = (mimetype: string) => {
    const isValidType =  Object.keys(Mimetype).includes(mimetype)
    if (!isValidType) {
      throw new NotAcceptableException("you can upload images of these types: " + Object.values(Mimetype).slice(1) )
    }
  }
}
