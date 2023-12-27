import type { JSX } from 'react';
import { useCallback } from 'react';

import { Button } from '@nextui-org/react';
import BlogList from 'src/client/features/blog/BlogList';
import { useBlogListQuery } from 'src/client/features/blog/hooks/use-blog-list-query';

const Blogs = (): JSX.Element => {
  const { refetch } = useBlogListQuery({ enabled: true });
  const handleRefresh = useCallback(() => refetch(), [refetch]);
  return (
    <>
      <div className='flex justify-between'>
        <h1>Blog</h1>
        <Button onClick={handleRefresh}>Refresh</Button>
      </div>
      <BlogList />
    </>
  );
};

export default Blogs;
