import type { JSX } from 'react';

import Summary from 'src/client/features/summary/Summary';

const Home = (): JSX.Element => (
  <div className='ag-flexbox ag-flexColumn'>
    <h1>Site structure</h1>
    <Summary />
  </div>
);

export default Home;
