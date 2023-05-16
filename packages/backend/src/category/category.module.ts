import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './domain/category.model';
import { CategoryRepository } from './repository/category.repository';
import { CategoryResolver } from './resolver/category.resolver';
import { CategoryService } from './service/category.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }])
  ],
  providers: [CategoryResolver, CategoryService, CategoryRepository],
  exports: [CategoryService]
})
export class CategoryModule {}
