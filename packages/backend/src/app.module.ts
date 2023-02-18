import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [CommonModule, UserModule, AuthModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
