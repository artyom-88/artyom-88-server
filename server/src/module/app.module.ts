import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CLIENT_BUILD_PATH, ENV_FILE_PATH } from '../const';
import { AppController } from '../controller/app.controller';
import { AuthModule } from './auth.module';
import { CareerModule } from './career.module';
import { UserModule } from './user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ENV_FILE_PATH
    }),
    ServeStaticModule.forRoot({
      rootPath: CLIENT_BUILD_PATH,
    }),
    AuthModule,
    CareerModule,
    UserModule
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {
}
