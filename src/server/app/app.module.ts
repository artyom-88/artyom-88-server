import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { isDev } from 'src/common/constants/common.constants';
import { AuthModule } from '../features/auth/auth.module';
import { BlogModule } from '../features/blog/blog.module';
import { CareerModule } from '../features/career/career.module';
import { UserModule } from '../features/user/user.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    AuthModule,
    BlogModule,
    CareerModule,
    UserModule,
    RenderModule.forRootAsync(Next({ dev: isDev }), { viewsDir: null }),
  ],
  controllers: [AppController],
  providers: [],
  exports: [ConfigModule],
})
export class AppModule {}
