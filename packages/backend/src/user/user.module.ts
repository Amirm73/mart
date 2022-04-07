import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './domain/user.model';
import { UserService } from './services/user.service';
import { UserResolver } from './resolvers/user.resolver';
import { UserRepository } from './repository/users.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserResolver, UserService, UserRepository],
})
export class UserModule {}
