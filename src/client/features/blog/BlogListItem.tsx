import type { JSX } from 'react';

import { Button } from '@mui/base';
import Link from 'next/link';
import { dayjs } from 'src/common/common-date';

import { BlogListItemProps } from './blog-types';
import styles from './BlogListItem.module.scss';

const BlogListItem = ({ item }: BlogListItemProps): JSX.Element => {
  const { _id: blogId, date, title, link, linkCaption } = item;
  return (
    <div className={`ag-flexbox ag-justifyContent-between ${styles.container}`} key={blogId}>
      <div>{dayjs(date).utc().format('MMMM DD, YYYY')}</div>
      <div>{title}</div>
      <div>{link}</div>
      <div>{linkCaption}</div>
      <Link href={`/blog/${blogId}`}>
        <Button>Open</Button>
      </Link>
    </div>
  );
};

export default BlogListItem;
