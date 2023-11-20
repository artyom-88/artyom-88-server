import type { JSX } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { BLOG_ID_QUERY_KEY } from '../../client/features/blog/blog-constants';
import { careerItemRequest } from '../../client/features/career/career-api';
import { CareerModel } from '../../common/types/common-career-types';

const Career = (): JSX.Element => {
  const router = useRouter();
  const id = router.query?.id as string;
  const { data, error } = useQuery<CareerModel>({
    queryFn: () => careerItemRequest(id),
    queryKey: [BLOG_ID_QUERY_KEY, id],
    refetchOnMount: false,
  });
  const career = data ?? ({} as CareerModel);

  if (error) return <div>Failed to load</div>;
  if (!career) return <div>Loading...</div>;
  return (
    <>
      <h1>{career.title}</h1>
      <div className='ag-flexbox'>
        <div>{JSON.stringify(career)}</div>
      </div>
    </>
  );
};

export default Career;
