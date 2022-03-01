import { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { IBlog } from 'src/common/types/blog.types';
import { TEntity } from 'src/common/types/common.types';
import { blogListRequest } from '../blog.api';
import { blogListState } from '../blog.atoms';

const BlogList: FC = (): ReactElement => {
  const [blogList, setBlogList] = useRecoilState<TEntity<IBlog>[]>(blogListState);
  const [error, setError] = useState<string>('');

  const loadBlogList = useCallback(() => {
    blogListRequest()
      .then((response) => {
        setBlogList(response);
      })
      .catch((e: Error) => {
        setError(e.message);
      });
  }, [setBlogList, setError]);

  useEffect(() => {
    loadBlogList();
    return () => {
      setBlogList([]);
    };
  }, [loadBlogList, setBlogList]);

  if (error) return <div>Failed to load</div>;
  if (!blogList?.length) return <div>Loading...</div>;

  return (
    <>
      <button onClick={loadBlogList}>Refresh</button>
      {blogList.map(({ _id, date, title, link, linkCaption }) => (
        <div key={_id} className='ag-flexbox'>
          <div>{date?.getFullYear()}</div>
          <div>{title}</div>
          <div>{link}</div>
          <div>{linkCaption}</div>
        </div>
      ))}
    </>
  );
};

export default BlogList;
