import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CLIENT_BUILD_PATH, ENV_FILE_PATH } from '../const';
import { CareerModule } from './career.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ENV_FILE_PATH
    }),
    ServeStaticModule.forRoot({
      rootPath: CLIENT_BUILD_PATH,
    }),
    CareerModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {
}
