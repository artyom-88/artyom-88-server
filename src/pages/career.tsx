import type { JSX } from 'react';
import { useCallback } from 'react';

import { Button } from '@mui/base';
import CareerList from 'src/client/features/career/CareerList';
import CareerModal from 'src/client/features/career/CareerModal';
import { useCareerListQuery } from 'src/client/features/career/hooks/use-career-list-query';
import { useCareerModal } from 'src/client/features/career/hooks/use-career-modal';

const Careers = (): JSX.Element => {
  const { refetch } = useCareerListQuery({ enabled: true });
  const { handleOpen } = useCareerModal();
  const handleAdd = useCallback(() => handleOpen(), [handleOpen]);
  const handleRefresh = useCallback(() => refetch(), [refetch]);
  return (
    <div>
      <div className='ag-flexbox ag-justifyContent-between'>
        <h1>Career</h1>
        <div className='ag-flexbox'>
          <Button onClick={handleAdd}>Add</Button>
          <span>&nbsp;</span>
          <Button onClick={handleRefresh}>Refresh</Button>
        </div>
      </div>
      <CareerList />
      <CareerModal />
    </div>
  );
};

export default Careers;
