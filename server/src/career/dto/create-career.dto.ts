import { IsString, IsDate } from '@nestjs/class-validator';

export class CreateCareerDto {
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
