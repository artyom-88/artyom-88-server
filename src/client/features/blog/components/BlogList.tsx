import type { JSX } from 'react';
import { useCallback } from 'react';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import type { IBlog } from 'src/common/types/blog.types';
import type { TEntity } from 'src/common/types/common.types';

import { blogListRequest } from '../blog-api';
import { BLOG_LIST_QUERY_KEY } from '../blog-constants';

const BlogList = (): JSX.Element => {
  const {
    data: blogList = [],
    error,
    isLoading,
    refetch,
  } = useQuery<TEntity<IBlog>[]>({
    queryFn: blogListRequest,
    queryKey: [BLOG_LIST_QUERY_KEY],
    refetchOnMount: false,
  });
  const handleRefresh = useCallback(() => refetch(), [refetch]);
  return (
    <div className='ag-flexbox ag-flexColumn'>
      <div className='ag-flexbox ag-alignItems_center ag-justifyContent_end'>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
      {error && <div>Failed to load</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        blogList.map(({ _id, date, title, link, linkCaption }) => (
          <Link key={_id} href={`/blog/${_id}`}>
            <div className='ag-flexbox'>
              <div>{date?.getFullYear()}</div>
              <div>{title}</div>
              <div>{link}</div>
              <div>{linkCaption}</div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default BlogList;
