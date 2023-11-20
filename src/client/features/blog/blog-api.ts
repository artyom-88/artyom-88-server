import httpClient from 'src/client/app/http-client';
import type { IBlog, IBlogDTO } from 'src/common/types/common-blog-types';

export const blogListRequest = async (): Promise<IBlog[]> => {
  const blogListDTO = await httpClient.get('blog').json<IBlogDTO[]>();
  return blogListDTO.map((item) => ({
    ...item,
    date: new Date(item.date),
  }));
};

export const blogRequest = async (id: string): Promise<IBlog> => {
  const blogDTO = await httpClient.get(`blog/${id}`).json<IBlogDTO>();
  return {
    ...blogDTO,
    date: new Date(blogDTO.date),
  };
};
