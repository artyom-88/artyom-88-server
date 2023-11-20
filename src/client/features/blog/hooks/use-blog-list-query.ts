import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { IBlog } from '../../../../common/types/common-blog-types';
import { blogListRequest } from '../blog-api';
import { BLOG_LIST_QUERY_KEY } from '../blog-constants';

export const useBlogListQuery = (
  { refetchOnMount = false, enabled = false, ...restProps }: Omit<UseQueryOptions<IBlog[]>, 'queryKey' | 'queryFn'> = {
    enabled: false,
    refetchOnMount: false,
  }
): UseQueryResult<IBlog[]> =>
  useQuery<IBlog[]>({
    ...restProps,
    enabled: enabled,
    queryFn: blogListRequest,
    queryKey: [BLOG_LIST_QUERY_KEY],
    refetchOnMount: refetchOnMount,
  });
