import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParamsModule } from 'src/server/common/params/params-module';
import { AuthModule } from 'src/server/features/auth/auth-module';

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
    AuthModule,
    ParamsModule,
  ],
  controllers: [BlogApiController, BlogController],
  providers: [BlogService],
})
export class BlogModule {}
