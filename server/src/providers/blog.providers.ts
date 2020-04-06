import { Connection } from 'mongoose';
import { BLOG_MODEL } from '../const';
import { BlogModel } from '../model/blog.model';

export const blogProviders = [
  {
    provide: BLOG_MODEL,
    useFactory: (connection: Connection) => connection.model(BLOG_MODEL, BlogModel),
    inject: ['DATABASE_CONNECTION']
  }
];
