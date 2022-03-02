import Link from 'next/link';
import { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import useToggleValue from 'src/common/hooks/useToggleValue';
import { IBlog } from 'src/common/types/blog.types';
import { TEntity } from 'src/common/types/common.types';
import { blogListRequest } from '../blog.api';
import { blogListState } from '../blog.atoms';

const BlogList: FC = (): ReactElement => {
  const [blogList, setBlogList] = useRecoilState<TEntity<IBlog>[]>(blogListState);
  const [error, setError] = useState<string>('');
  const [loading, toggleLoading] = useToggleValue();

  const loadBlogList = useCallback(() => {
    toggleLoading();
    blogListRequest()
      .then((response) => {
        setBlogList(response);
        toggleLoading();
      })
      .catch((e: Error) => {
        setError(e.message);
        toggleLoading();
      });
  }, [setBlogList, setError, toggleLoading]);

  useEffect(() => {
    loadBlogList();
    return () => {
      setBlogList([]);
    };
  }, [loadBlogList, setBlogList]);

  return (
    <div className='ag-flexbox ag-flexColumn'>
      <div className='ag-flexbox ag-alignItems_center ag-justifyContent_end'>
        <button onClick={loadBlogList}>Refresh</button>
      </div>
      {error && <div>Failed to load</div>}
      {loading ? (
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
