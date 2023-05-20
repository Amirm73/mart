import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Image, ImageSchema } from 'src/image/domain/image.model';
import { ImageRepository } from 'src/image/repository/image.repository';
import { ImageService } from 'src/image/service/image.service';
import { Product, ProductSchema } from './domain/product.model';
import { ProductRepository } from './repository/product.repository';
import { ProductResolver } from './resolver/product.resolver';
import { ProductService } from './service/product.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }])
  ],
  providers: [ProductResolver, ProductService, ProductRepository, ImageService, ImageRepository],
  // TODO: CHECK IMPORT FROM IMAGE MODULE
  exports: [ProductService]
})
export class ProductModule {}
