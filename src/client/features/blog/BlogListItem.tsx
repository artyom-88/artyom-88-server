import type { JSX } from 'react';

import { Button } from '@mui/base';
import Link from 'next/link';
import { BLOG_PAGE_URL } from 'src/common/common-constants';
import { dayjs } from 'src/common/common-date';

import { BlogListItemProps } from './blog-types';
import styles from './BlogListItem.module.scss';

const BlogListItem = ({ item }: BlogListItemProps): JSX.Element => {
  const { _id: itemId, date, title, link, linkCaption } = item;
  return (
    <div className={`ag-flexbox ag-justifyContent-between ${styles.container}`} key={itemId}>
      <div>{dayjs(date).utc().format('MMMM DD, YYYY')}</div>
      <div>{title}</div>
      <div>{link}</div>
      <div>{linkCaption}</div>
      <Link href={`${BLOG_PAGE_URL}/${itemId}`}>
        <Button>Open</Button>
      </Link>
    </div>
  );
};

export default BlogListItem;
