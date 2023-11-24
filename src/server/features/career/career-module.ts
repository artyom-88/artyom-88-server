import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParamsModule } from 'src/server/common/params/params-module';
import { AuthModule } from 'src/server/features/auth/auth-module';

import { CareerApiController } from './career-api-controller';
import { CareerController } from './career-controller';
import { Career, CareerSchema } from './career-schema';
import { CareerService } from './career-service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Career.name,
        schema: CareerSchema,
      },
    ]),
    AuthModule,
    ParamsModule,
  ],
  controllers: [CareerApiController, CareerController],
  providers: [CareerService],
})
export class CareerModule {}
