import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CLIENT_BUILD_PATH, ENV_FILE_PATH } from './common/constants';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { CareerModule } from './career/career.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ENV_FILE_PATH,
    }),
    ServeStaticModule.forRoot({
      rootPath: CLIENT_BUILD_PATH,
    }),
    AuthModule,
    BlogModule,
    CareerModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
