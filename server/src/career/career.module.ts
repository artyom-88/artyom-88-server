import { Module } from '@nestjs/common';
import { CareerController } from './career.controller';
import { careerProviders } from './career.providers';
import { CareerService } from './career.service';
import { DatabaseModule } from '../datatbase/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CareerController],
  providers: [CareerService, ...careerProviders],
})
export class CareerModule {}
