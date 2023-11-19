import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../features/auth/auth.module';
import { BlogModule } from '../features/blog/blog.module';
import { CareerModule } from '../features/career/career.module';
import { UserModule } from '../features/user/user.module';
import { AppController } from './app.controller';
import { UiModule } from './ui.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const uri = configService.get('DB_URI');
        return {
          uri,
          useNewUrlParser: true,
          useUnifiedTopology: true,
        };
      },
    }),
    AuthModule,
    BlogModule,
    CareerModule,
    UserModule,
    UiModule.register(),
  ],
  controllers: [AppController],
  providers: [],
  exports: [ConfigModule],
})
export class AppModule {}
