import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/features/auth/auth-module';
import { BlogModule } from 'src/features/blog/blog-module';
import { CareerModule } from 'src/features/career/career-module';

import { AppController } from './app-controller';

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
        };
      },
    }),
    AuthModule,
    BlogModule,
    CareerModule,
  ],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
