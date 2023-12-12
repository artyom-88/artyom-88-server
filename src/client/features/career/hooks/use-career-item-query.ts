import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { CareerModel } from 'src/common/types/common-career-types';

import { careerItemRequest } from '../career-api';
import { CAREER_ITEM_QUERY_KEY, EMPTY_CAREER_ITEM } from '../career-constants';
import { UseCareerItemQueryParams } from '../career-types';

export const useCareerItemQuery = (
  { enabled = false, id = null, refetchOnMount = false, ...restProps }: UseCareerItemQueryParams = {
    enabled: false,
    id: null,
    refetchOnMount: false,
  }
): UseQueryResult<CareerModel> =>
  useQuery<CareerModel>({
    ...restProps,
    enabled: enabled,
    queryFn: () => (id ? careerItemRequest(id) : EMPTY_CAREER_ITEM),
    queryKey: [CAREER_ITEM_QUERY_KEY, id],
    refetchOnMount: refetchOnMount,
  });
