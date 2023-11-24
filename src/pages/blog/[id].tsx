import type { JSX } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { blogItemRequest } from 'src/client/features/blog/blog-api';
import type { BlogModel } from 'src/common/types/common-blog-types';

import { BLOG_ID_QUERY_KEY } from '../../client/features/blog/blog-constants';

const Blog = (): JSX.Element => {
  const router = useRouter();
  const id = router.query?.id as string;
  const { data, error } = useQuery<BlogModel>({
    queryFn: () => blogItemRequest(id),
    queryKey: [BLOG_ID_QUERY_KEY, id],
    refetchOnMount: false,
  });
  const blog = data ?? ({} as BlogModel);

  if (error) return <div>Failed to load</div>;
  if (!blog) return <div>Loading...</div>;
  return (
    <>
      <h1>{blog.title}</h1>
      <div className='ag-flexbox'>
        <div>{blog.date?.getFullYear()}</div>
        <div>{blog.link}</div>
        <div>{blog.linkCaption}</div>
      </div>
    </>
  );
};

export default Blog;
