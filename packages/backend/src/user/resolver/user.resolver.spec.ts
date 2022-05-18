import {
  createUserInput,
  createUserInputJustMail,
  createUserMutation,
  createUserName,
} from './helpers/create.users.helper';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as supertest from 'supertest';
import { User, UserSchema } from '../domain/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResolver } from './user.resolver';
import { UserService } from '../service/user.service';
import { UserRepository } from '../repository/user.repository';
import { closeMongo, rootMongoTest } from '../../common/test/mongoose.helper';
import {
  GRAPHQL_ENDPOINT,
  rootGraphqlTest,
} from '../../common/test/graphql.helper';
import {
  UpdateUserInputJustMail,
  UpdateUserMutation,
  UpdateUserOperationName,
} from './helpers/update.users.helper';

describe('Users resolver (e2e)', () => {
  let app: INestApplication;
  let user: User;
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        await rootMongoTest(),
        rootGraphqlTest(),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
      ],
      providers: [UserResolver, UserService, UserRepository],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  afterEach(async () => {
    await closeMongo();
    await app.close();
  });

  it('creates a user with normal arguments', async () => {
    await supertest(app.getHttpServer())
      .post(GRAPHQL_ENDPOINT)
      .send({
        operationName: createUserName,
        query: createUserMutation,
        variables: createUserInput,
      })

      .expect((res) => {
        user = JSON.parse(res.text).data.CreateUser;
        expect(user._id).toBeDefined();
        expect(user.phone).toBe(createUserInput.phone);
        expect(user.email).toBe(createUserInput.email);
      });
  });

  it('does Not create a user without phone', async () => {
    await supertest(app.getHttpServer())
      .post(GRAPHQL_ENDPOINT)
      .send({
        operationName: createUserName,
        query: createUserMutation,
        variables: createUserInputJustMail,
      })

      .expect((res) => {
        const testUser: User = JSON.parse(res.text)?.data?.CreateUser;
        expect(testUser).toBe(undefined);
      });
  });

  it('does Not updates a user without id', async () => {
    await supertest(app.getHttpServer())
      .post(GRAPHQL_ENDPOINT)

      .send({
        operationName: UpdateUserOperationName,
        query: UpdateUserMutation,
        variables: UpdateUserInputJustMail,
      })
      .expect((res) => {
        const result = JSON.parse(res.text);
        expect(result.errors.length).not.toBe(0);
      });
  });

  it.skip('updates a user ', async () => {
    const updateObject = UpdateUserInputJustMail;
    await supertest(app.getHttpServer())
      .post(GRAPHQL_ENDPOINT)

      .send({
        operationName: UpdateUserOperationName,
        query: UpdateUserMutation,
        variables: { id: user._id, email: updateObject.email },
      })
      .expect((res) => {
        const result = JSON.parse(res.text)?.data?.UpdateUser;
        expect(result.errors.length).not.toBe(0);
        expect(result.email).toBe(updateObject.email);
      });
  });
});
