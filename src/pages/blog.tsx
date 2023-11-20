import type { JSX } from 'react';
import { useCallback } from 'react';

import { Button } from '@mui/base';
import BlogList from 'src/client/features/blog/BlogList';
import { useBlogListQuery } from 'src/client/features/blog/hooks/use-blog-list-query';

const Blogs = (): JSX.Element => {
  const { refetch } = useBlogListQuery({ enabled: true });
  const handleRefresh = useCallback(() => refetch(), [refetch]);
  return (
    <div>
      <div className='ag-flexbox ag-justifyContent-between'>
        <h1>Blog</h1>
        <Button onClick={handleRefresh}>Refresh</Button>
      </div>
      <BlogList />
    </div>
  );
};

export default Blogs;
