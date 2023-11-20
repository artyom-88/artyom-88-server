import { IsString } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';
import type { IBlogDTO } from 'src/common/types/common-blog-types';

export class CreateBlogDto implements IBlogDTO {
  @IsString()
  readonly title: string;

  @IsString()
  readonly link: string;

  @IsString()
  readonly linkCaption: string;

  // @IsDate()
  // readonly date: Date;
  // TODO: temporary solution before dates migration
  @IsString()
  readonly date: string;
}

export class UpdateBlogDto extends PartialType(CreateBlogDto) {}
