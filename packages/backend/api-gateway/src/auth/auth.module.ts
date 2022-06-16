import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { User } from '../user/domain/user.model';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  providers: [User, AuthService, AuthResolver],
})
export class AuthModule {}
