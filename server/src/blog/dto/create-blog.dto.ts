import { IsString, IsDate } from '@nestjs/class-validator';

export class CreateBlogDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly link: string;

  @IsString()
  readonly linkCaption: string;

  @IsDate()
  readonly date: Date;
}
