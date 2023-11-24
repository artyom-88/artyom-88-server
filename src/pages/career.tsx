import type { JSX } from 'react';
import { useCallback } from 'react';

import { Button } from '@mui/base';
import CareerList from 'src/client/features/career/CareerList';
import { useCareerListQuery } from 'src/client/features/career/hooks/use-career-list-query';

const Careers = (): JSX.Element => {
  const { refetch } = useCareerListQuery({ enabled: true });
  const handleRefresh = useCallback(() => refetch(), [refetch]);
  return (
    <div>
      <div className='ag-flexbox ag-justifyContent-between'>
        <h1>Career</h1>
        <Button onClick={handleRefresh}>Refresh</Button>
      </div>
      <CareerList />
    </div>
  );
};

export default Careers;
