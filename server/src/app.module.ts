import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { CareerModule } from './career/career.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../client/build'),
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
