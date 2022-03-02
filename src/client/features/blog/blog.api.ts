import { AxiosResponse } from 'axios';
import apiClient from 'src/client/app/api.client';
import { IBlog, IBlogDTO } from 'src/common/types/blog.types';
import { TEntity } from 'src/common/types/common.types';

export const blogListRequest = async (): Promise<TEntity<IBlog>[]> => {
  const { data }: AxiosResponse<TEntity<IBlogDTO>[]> = await apiClient.get('blog');
  return data.map((item) => ({
    ...item,
    date: new Date(item.date),
  }));
};

export const blogRequest = async (id: string): Promise<TEntity<IBlog>> => {
  const { data }: AxiosResponse<TEntity<IBlogDTO>> = await apiClient.get(`blog/${id}`);
  return {
    ...data,
    date: new Date(data.date),
  };
};
