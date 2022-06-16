import { Schema } from 'mongoose';
import { IUserDocument } from '../user.interface';
import { User } from '../user.model';

export const mockUser = (
  firstName = 'jack',
  phone = '9189993388',
  email = 'jack@gmail.com',
  password = 'jack1234',
  id = '3458',
): User => ({
  firstName,
  phone,
  email,
  password,
  _id: new Schema.Types.ObjectId(id),
});

export const mockUserDoc = (mock?: Partial<User>): Partial<IUserDocument> => ({
  firstName: mock?.firstName || 'jack',
  phone: mock?.phone || '9189993388',
  email: mock?.email || 'jack@gmail.com',
  password: mock?.password || 'jack1234',
  _id: mock?._id || new Schema.Types.ObjectId('3458'),
});

export const userArray = [
  mockUser(),
  mockUser('Jack', '9364445566', 'jack@gmail.com', 'jack1234', '342'),
  mockUser('Mac', '9364445567', 'mac@yahoo.com', 'mac$', '425'),
];

export const userDocArray = [
  mockUserDoc(),
  mockUserDoc({
    firstName: 'Jack',
    phone: '9364445566',
    email: 'jack@gmail.com',
    password: 'jack1234',
    _id: new Schema.Types.ObjectId('342'),
  }),
  mockUserDoc({
    firstName: 'Mac',
    phone: '9364445567',
    email: 'mac@yahoo.com',
    password: 'mac$',
    _id: new Schema.Types.ObjectId('425'),
  }),
];
