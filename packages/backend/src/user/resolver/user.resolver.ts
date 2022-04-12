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
  async getUserById(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.userService.findUserById(_id);
  }

  @Query(() => [User], { name: 'users' })
  async getUsers(@Args('filters', { nullable: true }) filters?: ListUserInput) {
    return this.userService.listUsers(filters);
  }

  @Mutation(() => User)
  async createUser(@Args('payload') payload: CreateUserInput) {
    return this.userService.createUser(payload);
  }

  @Mutation(() => User)
  async updateUser(@Args('payload') payload: UpdateUserInput) {
    return this.userService.updateUser(payload);
  }

  @Mutation(() => User)
  async deleteUser(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.userService.deleteUser(_id);
  }
}
