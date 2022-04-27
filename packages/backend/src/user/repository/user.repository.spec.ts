import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { createMock } from '@golevelup/ts-jest';
import { Model, Query, Schema } from 'mongoose';
import { UserRepository } from './user.repository';
import { User } from '../domain/user.model';
import { IUserDocument } from '../domain/user.interface';

const mockUser = (
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

const mockUserDoc = (mock?: Partial<User>): Partial<IUserDocument> => ({
  firstName: mock?.firstName || 'jack',
  phone: mock?.phone || '9189993388',
  email: mock?.email || 'jack@gmail.com',
  password: mock?.password || 'jack1234',
  _id: mock?._id || new Schema.Types.ObjectId('3458'),
});

const userArray = [
  mockUser(),
  mockUser('Jack', '9364445566', 'jack@gmail.com', 'jack1234', '342'),
  mockUser('Mac', '9364445567', 'mac@yahoo.com', 'mac$', '425'),
];

const userDocArray = [
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

describe('UserRepository', () => {
  let repo: UserRepository;
  let model: Model<IUserDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserRepository,
        {
          provide: getModelToken('User'),
          // notice that only the functions we call from the model are mocked
          useValue: {
            new: jest.fn().mockResolvedValue(mockUser()),
            constructor: jest.fn().mockResolvedValue(mockUser()),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            create: jest.fn(),
            remove: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    repo = module.get<UserRepository>(UserRepository);
    model = module.get<Model<IUserDocument>>(getModelToken('User'));
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
    jest.spyOn(model, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(userDocArray),
    } as any);
    const users = await repo.findAll({});
    expect(users).toEqual(userArray);
  });

  it('should getOne by id', async () => {
    const userId = '324';
    jest.spyOn(model, 'findOne').mockReturnValueOnce(
      createMock<Query<IUserDocument, IUserDocument>>({
        exec: jest.fn().mockResolvedValueOnce(
          mockUserDoc({
            firstName: 'Tom',
            _id: new Schema.Types.ObjectId(userId),
          }),
        ),
      }) as any,
    );
    const findMockUser = mockUser('Tom', userId);
    const foundUser = await repo.findById(new Schema.Types.ObjectId(userId));
    expect(foundUser).toEqual(findMockUser);
  });

  it.skip('should getOne by phone', async () => {
    jest.spyOn(model, 'findOne').mockReturnValueOnce(
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
    const findMockUser = mockUser('9335556677', 'Mac', '324');
    const foundUser = await repo.findByPhone('9335556677');
    expect(foundUser).toEqual(findMockUser);
  });

  it.skip('should create a new user', async () => {
    const user = {
      phone: '9189993388',
      firstName: 'jack',
      email: 'jack@gmail.com',
      password: 'jack1234',
      id: '8355',
    };
    jest
      .spyOn(model, 'create')
      .mockImplementationOnce(() => Promise.resolve(user));
    const newUser = await repo.create(user);
    expect(newUser).toEqual(
      mockUser('9189993388', 'jack', 'jack@gmail.com', 'jack1234', '8355'),
    );
  });

  // jest is complaining about findOneAndUpdate. Can't say why at the moment.
  it.skip('should update a user successfully', async () => {
    const user = {
      phone: '9189995588',
      firstName: 'jane',
      email: 'jane@gmail.com',
      password: 'jane_3453',
      _id: new Schema.Types.ObjectId('321'),
    };
    jest.spyOn(model, 'findOneAndUpdate').mockReturnValueOnce(
      createMock<Query<IUserDocument, IUserDocument>>({
        exec: jest.fn().mockResolvedValueOnce(user),
      }) as any,
    );
    const updatedUser = await repo.update(user);
    expect(updatedUser).toEqual(
      mockUser('9189995588', 'jane', 'jane@gmail.com', 'jane_3453', '321'),
    );
  });

  it.skip('should delete a user successfully', async () => {
    const userId = new Schema.Types.ObjectId('a bad id');
    // really just returning a truthy value here as we aren't doing any logic with the return
    jest.spyOn(model, 'remove').mockResolvedValueOnce(true as any);
    expect(await repo.delete(userId)).toEqual({ deleted: true });
  });

  it.skip('should not delete a user', async () => {
    const userId = new Schema.Types.ObjectId('a bad id');
    // really just returning a falsy value here as we aren't doing any logic with the return
    jest.spyOn(model, 'remove').mockRejectedValueOnce(new Error('Bad delete'));
    expect(await repo.delete(userId)).toEqual({
      deleted: false,
      message: 'Bad delete',
    });
  });
});
