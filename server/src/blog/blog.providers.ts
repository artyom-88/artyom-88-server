import { Connection } from 'mongoose';
import { BLOG_MODEL } from '../common/constants';
import { BlogModel } from './entities/blog.model';

export const blogProviders = [
  {
    provide: BLOG_MODEL,
    useFactory: (connection: Connection) => connection.model(BLOG_MODEL, BlogModel),
    inject: ['DATABASE_CONNECTION'],
  },
];
