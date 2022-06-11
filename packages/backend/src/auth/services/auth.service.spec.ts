import { INestApplication } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestingModule, Test } from '@nestjs/testing';
import { rootMongoTest, closeMongo } from '../../common/test/mongoose.helper';
import { User, UserSchema } from '../../user/domain/user.model';
import { createUserInput } from '../../user/resolver/specHelpers/create.user.helper';
import { AuthService } from '../services/auth.service';
import { LoginUserInput } from '../dto/LoginUser.input';
import * as Chance from 'chance';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../../user/service/user.service';
import { UserRepository } from '../../user/repository/user.repository';
import { ConfigModule, ConfigService } from '@nestjs/config';
const chance = new Chance();

describe('AuthService (unit)', () => {
  let app: INestApplication;
  let authService: AuthService;
  let userService: UserService;
  let user: User;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        await rootMongoTest(),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
        JwtModule,
        ConfigModule,
      ],
      providers: [AuthService, ConfigService, UserService, UserRepository],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    authService = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
  });
  afterAll(async () => {
    await closeMongo();
    await app.close();
  });

  const loginUserInput: LoginUserInput = {
    phone: createUserInput.phone,
    password: createUserInput.password,
  };
  it('should create a user to test login', async () => {
    user = await userService.createUser(createUserInput);
    expect(user).toBeDefined();
  });

  it.skip('should be able to generate an access token via correct password', async () => {
    console.log(loginUserInput);
    const { accessToken } = await authService.login(loginUserInput);
    expect(accessToken).toBeDefined();
  });

  it('should not be able to generate an access token via different password', async () => {
    const incorrectUserInput: LoginUserInput = {
      phone: loginUserInput.phone,
      password: chance.string({ length: 14 }),
    };

    console.log(incorrectUserInput);

    try {
      await authService.login(incorrectUserInput);
    } catch (err) {
      expect(err).toBeDefined();
      expect(err.response).toBeDefined();
      expect(err.response.statusCode).toBe(400);
    }
  });
});
