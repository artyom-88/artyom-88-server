import type { PropsWithChildren, ReactElement } from 'react';

import styles from './Layout.module.scss';
import Navigation from './Navigation';

export const rightsText = `© ${new Date().getFullYear()} All rights reserved`;

const Layout = ({ children }: PropsWithChildren<unknown>): ReactElement => (
  <div>
    <header className={styles.header}>
      <Navigation />
    </header>
    <main className={styles.main}>
      <div className='h-full w-full'>{children}</div>
    </main>
    <footer className={styles.footer}>{rightsText}</footer>
  </div>
);

export default Layout;
