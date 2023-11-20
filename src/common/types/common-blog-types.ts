import { IBaseEntity } from './common-types';

export interface IBlogBase extends IBaseEntity {
  link: string;
  linkCaption: string;
  title: string;
}

export interface IBlogDTO extends IBlogBase {
  date: string;
}

export interface IBlog extends IBlogBase {
  date: Date;
}
