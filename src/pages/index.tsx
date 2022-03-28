import Link from 'next/link';
import { FC } from 'react';

const Home: FC = () => {
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
