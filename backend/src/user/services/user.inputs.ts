
import { Schema as MongooseSchema } from 'mongoose';

export class CreateUserInput {
  name: string;
}

export class ListUserInput {
  _id?: MongooseSchema.Types.ObjectId;
  name?: string;
}

export class UpdateUserInput {
  _id: MongooseSchema.Types.ObjectId;
  name?: string;
}