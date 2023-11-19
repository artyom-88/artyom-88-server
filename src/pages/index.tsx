import type { JSX } from 'react';

import Link from 'next/link';

const Home = (): JSX.Element => {
  return (
    <div className='ag-flexbox ag-flexColumn'>
      <h1>Site structure</h1>
      <ul>
        <li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href='/career'>
            <a>Career</a>
          </Link>
        </li>
        <li>
          <Link href='/api'>
            <a target='_blank' rel='noopener noreferrer'>
              API
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
