import { JSX, PropsWithChildren } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { LOGIN_PAGE_URL } from 'src/common/common-constants';

import { checkAuthTokenApi } from './auth-api';
import { CHECK_AUTH_TOKEN_QUERY_KEY } from './auth-constants';
import { AuthStore } from './auth-types';
import { useAuthToken } from './hooks/use-auth-token';

const AuthWrapper = ({ children }: PropsWithChildren): JSX.Element => {
  const router = useRouter();
  const { isLoading } = useQuery<Record<string, unknown>>({
    queryFn: async () => {
      const { token, setToken }: AuthStore = useAuthToken.getState();
      try {
        return await checkAuthTokenApi(token);
      } catch (e) {
        setToken('');
        void router.replace(LOGIN_PAGE_URL);
      }
    },
    queryKey: [CHECK_AUTH_TOKEN_QUERY_KEY],
    refetchOnMount: false,
  });
  return <>{isLoading ? 'Loading... ' : children}</>;
};

export default AuthWrapper;
