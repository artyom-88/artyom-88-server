import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { CareerModule } from './career/career.module';
import { UserModule } from './user/user.module';

console.log('rootPath', __dirname);

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: process.env.CLIENT_PATH || join(__dirname, '../../client/build'),
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    AuthModule,
    BlogModule,
    CareerModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
}
