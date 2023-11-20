import { IsDate, IsString } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { BlogModel } from 'src/common/types/common-blog-types';

export class CreateBlogDTO implements BlogModel {
  @IsString()
  readonly title: string;

  @IsString()
  readonly link: string;

  @IsString()
  readonly linkCaption: string;

  @IsDate()
  readonly date: Date;
}

export class UpdateBlogDTO extends PartialType(CreateBlogDTO) {}
