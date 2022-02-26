import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserService } from '../user/services/user.service';
import { User } from '../user/domain/user.model';

@Module({
  providers: [User, UserService, AuthService, AuthResolver]
})
export class AuthModule { }
