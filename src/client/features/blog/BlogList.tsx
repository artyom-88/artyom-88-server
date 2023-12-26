import type { JSX } from 'react';

import BlogListItem from './BlogListItem';
import { useBlogListQuery } from './hooks/use-blog-list-query';

const BlogList = (): JSX.Element => {
  const { data: blogList = [], error, isFetching } = useBlogListQuery();
  return (
    <div className='flex flex-col'>
      {error && <div>Failed to load</div>}
      {isFetching ? <div>Loading...</div> : blogList.map((item) => <BlogListItem key={item._id} item={item} />)}
    </div>
  );
};

export default BlogList;
