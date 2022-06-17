import { Document, Schema } from 'mongoose';

export interface IUserDocument extends Document {
  _id: Schema.Types.ObjectId;
  email?: string;
  password: string;
  firstName?: string;
  lastName?: string;
  nationalCode?: string;
  phone: string;
  address?: string;
  avatar?: string;
}
