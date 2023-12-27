import { IsDate, IsString } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CareerModel } from 'src/common/types/common-career-types';

export class CreateCareerDTO implements CareerModel {
  @IsString()
  readonly title: string;

  @IsString()
  readonly site: string;

  @IsString()
  readonly post: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly tools: string;

  @IsDate()
  readonly startDate: Date;

  @IsDate()
  readonly endDate: Date;
}

export class UpdateCareerDTO extends PartialType(CreateCareerDTO) {}
