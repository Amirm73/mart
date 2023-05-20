import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { CommonModule } from './common/common.module';
import { HomePageModule } from './homepage/homePage.module';
import { ImageModule } from './image/image.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [CommonModule, UserModule, AuthModule, CategoryModule,ImageModule,ProductModule, HomePageModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
