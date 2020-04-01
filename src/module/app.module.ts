import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { CareerModule } from './career.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    CareerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
