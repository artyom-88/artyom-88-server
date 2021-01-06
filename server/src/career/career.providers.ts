import { Connection } from 'mongoose';
import { CAREER_MODEL } from '../common/constants';
import { CareerModel } from './entities/career.model';

export const careerProviders = [
  {
    provide: CAREER_MODEL,
    useFactory: (connection: Connection) => connection.model(CAREER_MODEL, CareerModel),
    inject: ['DATABASE_CONNECTION'],
  },
];
