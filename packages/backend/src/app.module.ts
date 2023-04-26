import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { categoryModule } from './category/category.module';
import { CommonModule } from './common/common.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CommonModule, UserModule, AuthModule, categoryModule, categoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
