import { IsString } from '@nestjs/class-validator';
import { IBlogDTO } from 'src/common/types/blog.types';

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
