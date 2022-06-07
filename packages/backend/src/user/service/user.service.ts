import { Injectable } from '@nestjs/common';
import { Schema as MongooseSchema } from 'mongoose';
import { CreateUserInput } from '../dto/CreateUser.input';
import { ListUserInput } from '../dto/ListUsers.input';
import { UpdateUserInput } from '../dto/UpdateUser.input';
import { UserRepository } from '../repository/user.repository';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  findUserByPhone(phone: string) {
    return this.userRepository.findByPhone(phone);
  }

  async createUser(payload: CreateUserInput) {
    payload.password = await bcrypt.hash(payload.password, 10);
    return this.userRepository.create(payload);
  }

  findUserById(_id: MongooseSchema.Types.ObjectId) {
    return this.userRepository.findById(_id);
  }
  listUsers(filters: ListUserInput) {
    return this.userRepository.findAll(filters);
  }
  updateUser(payload: UpdateUserInput) {
    return this.userRepository.update(payload);
  }

  deleteUser(_id: MongooseSchema.Types.ObjectId) {
    return this.userRepository.delete(_id);
  }
}
