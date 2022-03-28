import Link from 'next/link';
import { PropsWithChildren, ReactElement } from 'react';
import styles from './Layout.module.scss';

export const rightsText = `© ${new Date().getFullYear()} All rights reserved`;

const Layout = ({ children }: PropsWithChildren<unknown>): ReactElement => (
  <div className='ag-fullHeight ag-fullWidth'>
    <nav className={`ag-flexbox ag-fullWidth ag-alignItems_center ag-justifyContent_center ${styles.nav}`}>
      <Link href='/'>
        <a className={styles.navLink}>Main</a>
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
    <main className={styles.main}>{children}</main>
    <footer className={`ag-fullWidth ${styles.footer}`}>{rightsText}</footer>
  </div>
);

export default Layout;
