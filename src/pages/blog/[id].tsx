import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { blogRequest } from 'src/client/features/blog/blog.api';
import { blogItemState } from 'src/client/features/blog/blog.atoms';
import { IBlog } from 'src/common/types/blog.types';
import { TEntity } from 'src/common/types/common.types';

const Blog: FC = () => {
  const [blog, setBlog] = useRecoilState<TEntity<IBlog> | null>(blogItemState);
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const id = router.query?.id as string;

  useEffect(() => {
    if (id) {
      blogRequest(id)
        .then((response) => {
          setBlog(response);
        })
        .catch((e: Error) => {
          setError(e.message);
        });
      return () => {
        setBlog(null);
      };
    }
  }, [id, setBlog, setBlog]);

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
