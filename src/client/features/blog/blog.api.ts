import { AxiosResponse } from 'axios';
import api from 'src/client/app/api.client';
import { IBlog, IBlogDTO } from 'src/common/types/blog.types';
import { TEntity } from 'src/common/types/common.types';

export const blogListRequest = async (): Promise<TEntity<IBlog>[]> => {
  const { data }: AxiosResponse<TEntity<IBlogDTO>[]> = await api.get('blog');
  return data.map((item) => ({
    ...item,
    date: new Date(item.date),
  }));
};
