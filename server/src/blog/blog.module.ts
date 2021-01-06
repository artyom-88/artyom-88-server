import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { blogProviders } from './blog.providers';
import { BlogService } from './blog.service';
import { DatabaseModule } from '../datatbase/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BlogController],
  providers: [BlogService, ...blogProviders],
})
export class BlogModule {}
