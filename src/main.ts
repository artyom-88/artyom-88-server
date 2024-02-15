import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from 'src/app/app-module';
import { LoggingInterceptor } from 'src/app/logging-interceptor';
import { PORT } from 'src/common/common-constants';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: [
      /https:\/\/artemganev-admin-410f30539f11.herokuapp.com*/,
      /https:\/\/artemganev-admin-dev-e1852d9ebd09.herokuapp.com*/,
      /https:\/\/artemganev-admin-test-43d3c009c15d.herokuapp.com*/,
      /https:\/\/artemganev-be-13b50ea004b5.herokuapp.com*/,
      /https:\/\/artemganev-be-dev-02da3abc0800.herokuapp.com*/,
      /https:\/\/artyom-88-dev-55fd70efc97a.herokuapp.com*/,
      /https:\/\/artyom-88-test-cd1e609bf639.herokuapp.com*/,
      /https:\/\/artyom-88.github.io*/,
      /https?:\/\/localhost:\d{4}/,
    ],
  });
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

  const config = new DocumentBuilder().setTitle('The API').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(PORT);
  const url = await app.getUrl();
  console.log(`Application is running on: ${url}`);
}

void bootstrap();
