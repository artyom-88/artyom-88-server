import httpClient from 'src/client/app/http-client';
import type { IBlog, IBlogDTO } from 'src/common/types/blog.types';
import type { TEntity } from 'src/common/types/common.types';

export const blogListRequest = async (): Promise<TEntity<IBlog>[]> => {
  const data = await httpClient.get('blog').json<TEntity<IBlogDTO>[]>();
  return data.map((item) => ({
    ...item,
    date: new Date(item.date),
  }));
};

export const blogRequest = async (id: string): Promise<TEntity<IBlog>> => {
  const data = await httpClient.get(`blog/${id}`).json<TEntity<IBlogDTO>>();
  return {
    ...data,
    date: new Date(data.date),
  };
};
