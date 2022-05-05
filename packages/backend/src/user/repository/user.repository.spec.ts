import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { createMock } from '@golevelup/ts-jest';
import { Model, Query, Schema } from 'mongoose';
import { UserRepository } from './user.repository';
import { IUserDocument } from '../domain/user.interface';
import {
  mockUser,
  mockUserDoc,
  userArray,
  userDocArray,
} from '../domain/__mocks__/user.document.mock';
import UserModelMock from '../domain/__mocks__/user.model.mock';

describe('UserRepository', () => {
  let repo: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserRepository,
        {
          provide: getModelToken('User'),
          useValue: UserModelMock,
        },
      ],
    }).compile();

    repo = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(repo).toBeDefined();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // In all the spy methods/mock methods we need to make sure to
  // add in the property function exec and tell it what to return
  // this way all of our mongo functions can and will be called
  // properly allowing for us to successfully test them.
  it('should return all users', async () => {
    jest.spyOn(UserModelMock, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(userDocArray),
    } as any);
    const users = await repo.findAll({});
    expect(users).toEqual(userArray);
  });

  it('should getOne by id', async () => {
    const userId = '3458';
    jest.spyOn(UserModelMock, 'findById').mockReturnValueOnce(
      createMock<Query<IUserDocument, IUserDocument>>({
        exec: jest.fn().mockResolvedValueOnce(
          mockUserDoc({
            firstName: 'Jack',
            phone: '9364445566',
            email: 'jack@gmail.com',
            password: 'jack1234',
            _id: new Schema.Types.ObjectId(userId),
          }),
        ),
      }) as any,
    );
    const findMockUser = mockUser(
      'Jack',
      '9364445566',
      'jack@gmail.com',
      'jack1234',
      userId,
    );

    const foundUser = await repo.findById(new Schema.Types.ObjectId(userId));
    expect(foundUser).toEqual(findMockUser);
  });

  it.skip('should getOne by phone', async () => {
    jest.spyOn(UserModelMock, 'findOne').mockReturnValueOnce(
      createMock<Query<Model<IUserDocument>, Model<IUserDocument>>>({
        exec: jest.fn().mockResolvedValueOnce(
          mockUserDoc({
            firstName: 'Mac',
            phone: '9335556677',
            _id: new Schema.Types.ObjectId('324'),
          }),
        ),
      }) as any,
    );
    const findMockUser = mockUser(
      'Mac',
      '9335556677',
      undefined,
      undefined,
      '324',
    );
    const foundUser = await repo.findByPhone('9335556677');
    expect(foundUser).toEqual(findMockUser);
  });

  it('should create a new user', async () => {
    const user = {
      phone: '9189993388',
      firstName: 'jack',
      email: 'jack@gmail.com',
      password: 'jack1234',
      _id: new Schema.Types.ObjectId('8355'),
    };
    jest
      .spyOn(UserModelMock, 'create')
      .mockImplementationOnce(() => Promise.resolve(user));
    const newUser = await repo.create(user);
    expect(newUser).toEqual(
      mockUser('jack', '9189993388', 'jack@gmail.com', 'jack1234', '8355'),
    );
  });

  // jest is complaining about findOneAndUpdate.
  it('should update a user successfully', async () => {
    const user = {
      firstName: 'jane',
      phone: '9189995588',
      email: 'jane@gmail.com',
      password: 'jane_3453',
      _id: new Schema.Types.ObjectId('8355'),
    };
    jest.spyOn(UserModelMock, 'findByIdAndUpdate').mockReturnValueOnce(
      createMock<Query<IUserDocument, IUserDocument>>({
        exec: jest.fn().mockResolvedValueOnce(user),
      }) as any,
    );
    const updatedUser = await repo.update(user);
    expect(updatedUser).toEqual(
      mockUser('jane', '9189995588', 'jane@gmail.com', 'jane_3453', '8355'),
    );
  });

  it('should delete a user successfully', async () => {
    const userId = new Schema.Types.ObjectId('8355');
    jest
      .spyOn(UserModelMock, 'findByIdAndDelete')
      .mockResolvedValueOnce({ deleted: true });
    expect(await repo.delete(userId)).toEqual({ deleted: true });
  });

  it('should not delete a user', async () => {
    //arrange
    const userId = new Schema.Types.ObjectId('a bad id');
    jest
      .spyOn(UserModelMock, 'findByIdAndDelete')
      .mockRejectedValueOnce(new Error('Bad delete'));

    //act
    const deletePromise = repo.delete(userId);
    //assert
    await expect(deletePromise).rejects.toThrow('Bad delete');
  });
});
