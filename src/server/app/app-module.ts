import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/server/features/auth/auth-module';
import { BlogModule } from 'src/server/features/blog/blog-module';
import { CareerModule } from 'src/server/features/career/career-module';

import { AppController } from './app-controller';
import { UiModule } from './ui-module';

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
    UiModule.register(),
  ],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
