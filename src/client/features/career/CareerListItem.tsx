import type { JSX } from 'react';

import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { CAREER_PAGE_URL } from 'src/common/common-constants';
import { dayjs } from 'src/common/common-date';

import { CareerListItemProps } from './career-types';
import styles from './CareerListItem.module.scss';

const CareerListItem = ({ item }: CareerListItemProps): JSX.Element => {
  const { _id: itemId, endDate, description, post, site, startDate, title, tools } = item;
  return (
    <div className={`flex justify-between ${styles.container}`} key={itemId}>
      <div>{title}</div>
      <div>
        <span>{dayjs(startDate).utc().format('MMMM DD, YYYY')}</span>
        {endDate ? <span> - {dayjs(endDate).utc().format('MMMM DD, YYYY')}</span> : null}
      </div>
      <div>{post}</div>
      <div>{site}</div>
      <div>{description}</div>
      <div>{tools}</div>
      <Link href={`${CAREER_PAGE_URL}/${itemId}`}>
        <Button>Open</Button>
      </Link>
    </div>
  );
};

export default CareerListItem;
