import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

console.log(process.env.NODE_ENV);

@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
  ],
})
export class ConfigModule {}
