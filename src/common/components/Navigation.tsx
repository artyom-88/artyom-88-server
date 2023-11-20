import type { ReactElement } from 'react';

import Link from 'next/link';

import styles from './Navigation.module.scss';

const Navigation = (): ReactElement => (
  <nav className={`ag-flexbox ag-fullWidth ag-alignItems_center ag-justifyContent_center ${styles.nav}`}>
    <Link href='/'>
      <a className={styles.navLink}>Home</a>
    </Link>
    <Link href='/blog'>
      <a className={styles.navLink}>Blog</a>
    </Link>
    <Link href='/career'>
      <a className={styles.navLink}>Career</a>
    </Link>
    <Link href='/api'>
      <a className={styles.navLink} target='_blank' rel='noopener noreferrer'>
        API
      </a>
    </Link>
  </nav>
);

export default Navigation;
