import { Connection } from 'mongoose';
import { USER_MODEL } from '../const';
import { UserModel } from '../model/user.model';

export const userProviders = [
  {
    provide: USER_MODEL,
    useFactory: (connection: Connection) => connection.model(USER_MODEL, UserModel),
    inject: ['DATABASE_CONNECTION']
  }
];
