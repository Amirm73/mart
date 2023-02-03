import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Schema as MongooseSchema } from 'mongoose';
import { ListUserInput } from '../dto/ListUsers.input';
import { UpdateUserInput } from '../dto/UpdateUser.input';
import { UserRepository } from '../repository/user.repository';
@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async findUserByPhone(phone: string) {
    return await this.userRepository.findByPhone(phone);
  }

  async createUser(phone: string, password :string,email?:string, firstName?:string, lastName?:string, nationalCode?:string, address?:string, avatar?:string ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.userRepository.create(phone, hashedPassword ,email, firstName, lastName, nationalCode, address, avatar );
  }

  async findUserById(_id: MongooseSchema.Types.ObjectId) {
    return await this.userRepository.findById(_id);
  }

  async listUsers(filters: ListUserInput) {
    return await this.userRepository.findAll(filters);
  }

  async updateUser(payload: UpdateUserInput) {
    return await this.userRepository.update(payload);
  }

  async deleteUser(_id: MongooseSchema.Types.ObjectId) {
    return await this.userRepository.delete(_id);
  }
}
