import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './domain/product.model';
import { ProductRepository } from './repository/product.repository';
import { ProductResolver } from './resolver/product.resolver';
import { ProductService } from './service/product.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ],
  providers: [ProductResolver, ProductService, ProductRepository],
  exports: [ProductService]
})
export class ProductModule {}
