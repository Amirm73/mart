import {
  BadRequestException, Injectable,
  InternalServerErrorException,
  NotFoundException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { IUserDocument } from '../domain/user.interface';
import { User } from '../domain/user.model';
import { ListUserInput } from '../dto/ListUsers.input';
import { UpdateUserInput } from '../dto/UpdateUser.input';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<IUserDocument>,
    // @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  // TODO: send a generated password to user phone number and then create the user
  async create(phone: string, password :string,email:string, firstName:string, lastName:string, nationalCode:string, address:string, avatar:string ) {
    const foundUser = await this.exists(phone);
    if (foundUser) throw new BadRequestException('user is registered before');

    try {
      // const password = await this.cacheManager.get(`${phone}`);
      const createdUser = new this.userModel({phone, password ,email, firstName, lastName, nationalCode, address, avatar });
      
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
    return this.userModel.findByIdAndDelete(_id);
  }
}
