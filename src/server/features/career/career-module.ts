import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

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
  ],
  controllers: [CareerApiController, CareerController],
  providers: [CareerService],
})
export class CareerModule {}
