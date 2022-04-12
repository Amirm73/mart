import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// User is my class and UserDocument is my typescript type
// ie. export type UserDocument = User & Document; <-- Mongoose Type
import { User, UserDocument } from '../domain/user.model';
import { UserRepository } from './users.repository';
// import graphqlScalars from 'graphql-scalar-types';

describe('UserRepository', () => {
  let mockUserModel: Model<UserDocument>;
  let mockRepository: UserRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken(User.name),
          useValue: User, // <-- Use the Model Class from Mongoose
        },
        UserRepository,
        // graphqlScalars,
      ],
    }).compile();
    // Make sure to use the correct Document Type for the 'module.get' func
    mockUserModel = module.get<Model<UserDocument>>(getModelToken(User.name));
    mockRepository = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(mockRepository).toBeDefined();
  });

  it.skip('should return a user doc', async () => {
    // arrange
    const user = new User();
    const userId = user._id;
    const spy = jest
      .spyOn(mockUserModel, 'findById') // <- spy on what you want
      .mockResolvedValue(user as UserDocument); // <- set your resolved value
    // act
    await mockRepository.findById(userId);
    // assert
    expect(spy).toBeCalled();
  });
});
