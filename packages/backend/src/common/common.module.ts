import { Module } from '@nestjs/common';
import { ConfigModule } from './config.module';
import { GraphqlModule } from './graphql.module';
import { MongoModule } from './mongo.module';
import { StaticFileModule } from './staticFile.module';
// import { RedisModule } from './redis.module';

@Module({
  imports: [ConfigModule, GraphqlModule, MongoModule, StaticFileModule],
  exports: [ConfigModule, GraphqlModule, MongoModule, StaticFileModule],
})
export class CommonModule {}
