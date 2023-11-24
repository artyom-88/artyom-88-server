import type { ReactElement } from 'react';

import Link from 'next/link';
import { BLOG_PAGE_URL, CAREER_PAGE_URL } from 'src/common/common-constants';

import ApiLink from './ApiLink';
import styles from './Navigation.module.scss';

const Navigation = (): ReactElement => (
  <nav className={`ag-flexbox ag-fullWidth ag-alignItems_center ag-justifyContent_between ${styles.nav}`}>
    <div className='ag-flexbox ag-fullWidth ag-alignItems_center ag-justifyContent_center'>
      <span className={styles.navLink}>
        <Link href='/'>Home</Link>
      </span>
      <span className={styles.navLink}>
        <Link href={BLOG_PAGE_URL}>Blog</Link>
      </span>
      <span className={styles.navLink}>
        <Link href={CAREER_PAGE_URL}>Career</Link>
      </span>
      <ApiLink className={styles.navLink}>API</ApiLink>
    </div>
  </nav>
);

export default Navigation;
