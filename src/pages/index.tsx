import type { JSX } from 'react';

import Link from 'next/link';

const Home = (): JSX.Element => (
  <div className='ag-flexbox ag-flexColumn'>
    <h1>Site structure</h1>
    <div className='ag-flexbox ag-flexColumn'>
      <Link href='/blog'>
        <a>Blog page</a>
      </Link>
      <Link href='/career'>
        <a>Career page</a>
      </Link>
      <Link href='/api'>
        <a target='_blank' rel='noopener noreferrer'>
          API documentation page
        </a>
      </Link>
    </div>
  </div>
);

export default Home;
