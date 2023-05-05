import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { categoryModule } from './category/category.module';
import { CommonModule } from './common/common.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [CommonModule, UserModule, AuthModule, categoryModule, categoryModule, ProductModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', '/public/'),
            serveStaticOptions: { index: false },
        }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
