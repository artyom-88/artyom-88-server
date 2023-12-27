import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParamsModule } from 'src/common/params/params-module';
import { AuthModule } from 'src/features/auth/auth-module';

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
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
