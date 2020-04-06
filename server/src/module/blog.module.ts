import { Module } from '@nestjs/common';
import { BlogController } from '../controller/blog.controller';
import { blogProviders } from '../providers/blog.providers';
import { BlogService } from '../service/blog.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BlogController],
  providers: [BlogService, ...blogProviders]
})

export class BlogModule {
}
