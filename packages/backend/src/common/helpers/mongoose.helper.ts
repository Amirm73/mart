import { MongooseModule } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import * as mongoose from 'mongoose';

let mongod: MongoMemoryServer;

export const rootMongooseTestModule = () =>
  MongooseModule.forRootAsync({
    useFactory: async () => {
      mongod = await MongoMemoryServer.create();
      const mongoUri = mongod.getUri();
      console.log('=========>', mongoUri);
      return {
        uri: mongoUri,
      };
    },
  });

export const closeInMongodConnection = async () => {
  await mongoose.disconnect();
  if (mongod) await mongod.stop();
};
