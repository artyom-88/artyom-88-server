import type { JSX } from 'react';

import CareerListItem from './CareerListItem';
import { useCareerListQuery } from './hooks/use-career-list-query';

const CareerList = (): JSX.Element => {
  const { data: careerList = [], error, isFetching } = useCareerListQuery();
  return (
    <div className='flex flex-col'>
      {error && <div>Failed to load</div>}
      {isFetching ? <div>Loading...</div> : careerList.map((item) => <CareerListItem key={item._id} item={item} />)}
    </div>
  );
};

export default CareerList;
