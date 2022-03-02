export interface IBaseEntity {
  _id: string;
}

export type TEntity<T> = IBaseEntity & T;
