import { BaseEntity } from './common-types';

export interface CareerModelBase extends BaseEntity {
  description: string;
  post: string;
  site: string;
  title: string;
  tools: string;
}

export interface CareerDTO extends CareerModelBase {
  endDate?: string;
  startDate: string;
}

export interface CareerModel extends CareerModelBase {
  endDate?: Date;
  startDate: Date;
}
