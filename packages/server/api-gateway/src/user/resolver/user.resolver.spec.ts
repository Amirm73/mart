import {
  createUserInput,
  createUserMutation,
  createUserName,
} from './specHelpers/create.user.helper';
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
  UpdateUserInputGenerator,
  UpdateUserMutation,
  UpdateUserOperationName,
} from './specHelpers/update.user.helper';
import {
  DeleteUserMutation,
  DeleteUserOperationName,
} from './specHelpers/delete.user.helper';

describe('Users resolver (e2e)', () => {
  let app: INestApplication;
  let user: User;

  beforeAll(async () => {
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
  afterAll(async () => {
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
        console.log(user);

        expect(user._id).toBeDefined();
        expect(user.phone).toBe(createUserInput.phone);
        expect(user.email).toBe(createUserInput.email);
      });
  });

  it('updates a user ', async () => {
    await supertest(app.getHttpServer())
      .post(GRAPHQL_ENDPOINT)
      .send({
        operationName: UpdateUserOperationName,
        query: UpdateUserMutation,
        variables: UpdateUserInputGenerator(user._id),
      })
      .expect((res) => {
        const result = JSON.parse(res.text);
        console.log(result.errors);
        expect(result.errors).toBe(undefined);
      });
  });

  it('deletes a user ', async () => {
    console.log(user._id);
    await supertest(app.getHttpServer())
      .post(GRAPHQL_ENDPOINT)

      .send({
        operationName: DeleteUserOperationName,
        query: DeleteUserMutation,
        variables: { id: user._id },
      })
      .expect((res) => {
        const result = JSON.parse(res.text);
        expect(result.data?.DeleteUser?._id).toBe(user._id);
      });
  });
});
