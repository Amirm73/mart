import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { User } from '../domain/user.model';
import { UserService } from '../service/user.service';
import { CreateUserInput } from '../dto/CreateUser.input';
import { ListUserInput } from '../dto/ListUsers.input';
import { UpdateUserInput } from '../dto/UpdateUser.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User, { name: 'user' })
  async GetUserById(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.userService.findUserById(_id);
  }

  @Query(() => [User], { name: 'users' })
  async GetUsers(@Args('filters', { nullable: true }) filters?: ListUserInput) {
    return this.userService.listUsers(filters);
  }

  @Mutation(() => User)
  async CreateUser(@Args('payload') payload: CreateUserInput) {
    return this.userService.createUser(payload);
  }

  @Mutation(() => User)
  async UpdateUser(@Args('payload') payload: UpdateUserInput) {
    return this.userService.updateUser(payload);
  }

  @Mutation(() => User)
  async DeleteUser(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.userService.deleteUser(_id);
  }
}
