import { httpClient } from 'src/client/app/http-client';
import type { BlogDTO, BlogModel } from 'src/common/types/common-blog-types';

const blogItemAdapter = (dto: BlogDTO): BlogModel => ({
  ...dto,
  date: new Date(dto.date),
});

export const blogListRequest = async (): Promise<BlogModel[]> => {
  const dto = await httpClient.get('blog').json<BlogDTO[]>();
  return dto.map(blogItemAdapter);
};

export const blogItemRequest = async (id: string): Promise<BlogModel> => {
  const dto = await httpClient.get(`blog/${id}`).json<BlogDTO>();
  return blogItemAdapter(dto);
};
