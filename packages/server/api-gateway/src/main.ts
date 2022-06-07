import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { join } from 'path';

const logger = new Logger('Main');
const microserviceOptions: MicroserviceOptions = {
  transport: Transport.GRPC,
  options: {
    url: `${process.env.GRPC_URL}`,
    package: 'app',
    protoPath: join(__dirname, './_proto/app.proto'),
    loader: {
      keepCase: true,
      enums: String,
      oneofs: true,
      arrays: true,
    },
  },
};
async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  app.listen();
  logger.log('Microservice is listening ...');
}
bootstrap();
