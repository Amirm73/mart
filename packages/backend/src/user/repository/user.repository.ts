import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { User, UserDocument } from '../domain/user.model';
import { CreateUserInput } from '../dto/CreateUser.input';
import { ListUserInput as ListUserInput } from '../dto/ListUsers.input';
import { UpdateUserInput } from '../dto/UpdateUser.input';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  // TODO: send a generated password to user phone number and then create the user
  async create(createUserInput: CreateUserInput) {
    const foundUser = await this.exists(createUserInput.phone);
    if (foundUser) throw new BadRequestException('user is registered before');

    try {
      const createdUser = new this.userModel(createUserInput);
      return await createdUser.save();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findById(_id: MongooseSchema.Types.ObjectId) {
    return await this.userModel.findById({ _id }).exec();
  }

  async findByIdOrThrow(_id: MongooseSchema.Types.ObjectId) {
    const user = await this.userModel.findById(_id).exec();
    if (!user) {
      throw new NotFoundException('user');
    }
    return user;
  }

  async findByPhone(phone: string) {
    return await this.userModel.findOne({ phone });
  }

  async findAll(listUserInput: ListUserInput) {
    return await this.userModel.find({ ...listUserInput }).exec();
  }

  async exists(phone: string) {
    return await this.userModel.exists({ phone });
  }

  update(updateUserInput: UpdateUserInput) {
    return this.userModel
      .findByIdAndUpdate(updateUserInput._id, updateUserInput, { new: true })
      .exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.userModel.findByIdAndDelete(_id).exec();
  }
}

/* eslint-disable @typescript-eslint/no-empty-function */
export class UserRepositoryFake {
  public async create(): Promise<void> {}
  public async findById(): Promise<void> {}
  public async findByIdOrThrow(): Promise<void> {}
  public async findByPhone(): Promise<void> {}
  public async findAll(): Promise<void> {}
  public async update(): Promise<void> {}
  public async delete(): Promise<void> {}
}
