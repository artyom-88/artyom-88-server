import { Connection } from 'mongoose';
import { USER_MODEL } from '../common/constants';
import { UserModel } from './entities/user.model';

export const userProviders = [
  {
    provide: USER_MODEL,
    useFactory: (connection: Connection) => connection.model(USER_MODEL, UserModel),
    inject: ['DATABASE_CONNECTION'],
  },
];
