import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from '../features/auth/auth.module';
import { BlogModule } from '../features/blog/blog.module';
import { CareerModule } from '../features/career/career.module';
import { UserModule } from '../features/user/user.module';
import { AppController } from './app.controller';

console.log('rootPath', __dirname);

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: process.env.CLIENT_PATH || join(__dirname, '../../client/build'),
    }),
    MongooseModule.forRoot(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
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
