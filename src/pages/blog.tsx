import type { JSX } from 'react';

import BlogList from 'src/client/features/blog/components/BlogList';

const Blogs = (): JSX.Element => {
  return (
    <div>
      <h1>Blog</h1>
      <BlogList />
    </div>
  );
};

export default Blogs;
