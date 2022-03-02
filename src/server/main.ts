import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { PORT } from 'src/common/constants/common.constants';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
      whitelist: true,
      // https://github.com/nestjs/nest/issues/8562
      validatorPackage: require('@nestjs/class-validator'),
      transformerPackage: require('@nestjs/class-transformer'),
    })
  );
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(PORT);
  const url = await app.getUrl();
  console.log(`Application is running on: ${url}`);
}

bootstrap();
