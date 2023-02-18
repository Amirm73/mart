import { INestApplication } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import * as Chance from 'chance';
import { closeMongo, rootMongoTest } from '../../common/test/mongoose.helper';
import { User, UserSchema } from '../../user/domain/user.model';
import { UserRepository } from '../../user/repository/user.repository';
import { createUserInput } from '../../user/resolver/specHelpers/create.user.helper';
import { UserService } from '../../user/service/user.service';
import { LoginUserInput } from '../dto/LoginUser.input';
import { AuthService } from '../services/auth.service';
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


  it('should create a user to test login', async () => {
    user = await userService.createUser(createUserInput.phone, createUserInput.password);
    expect(user).toBeDefined();
  });

  it.skip('should be able to generate an access token via correct password', async () => {
    console.log();
    const { accessToken } = await authService.login(createUserInput.phone, createUserInput.password);
    expect(accessToken).toBeDefined();
  });

  it('should not be able to generate an access token via different password', async () => {
    const incorrectUserInput: LoginUserInput = {
      phone: createUserInput.phone,
      password: chance.string({ length: 14 }),
    };

    console.log(incorrectUserInput);

    try {
      await authService.login(incorrectUserInput.phone, incorrectUserInput.password);
    } catch (err) {
      expect(err).toBeDefined();
      expect(err.response).toBeDefined();
      expect(err.response.statusCode).toBe(400);
    }
  });
});
