import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParamsModule } from 'src/server/common/params/params-module';

import { BlogApiController } from './blog-api-controller';
import { BlogController } from './blog-controller';
import { Blog, BlogSchema } from './blog-schema';
import { BlogService } from './blog-service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Blog.name,
        schema: BlogSchema,
      },
    ]),
    ParamsModule,
  ],
  controllers: [BlogApiController, BlogController],
  providers: [BlogService],
})
export class BlogModule {}
