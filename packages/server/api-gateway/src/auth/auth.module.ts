import { Module } from '@nestjs/common';
import { User } from '../user/domain/user.model';
import { UserModule } from '../user/user.module';
import { AuthResolver } from './resolver/auth.resolver';
import { AuthService } from './services/auth.service';

@Module({
  imports: [UserModule],
  providers: [User, AuthService, AuthResolver],
})
export class AuthModule {}
