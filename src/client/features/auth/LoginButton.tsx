'use client';
import { JSX, useCallback } from 'react';

import { Button } from '@mui/base/Button';
import { useRouter } from 'next/router';
import { useAuthToken } from 'src/client/features/auth/hooks/use-auth-token';
import { useAuthorized } from 'src/client/features/auth/hooks/use-authorized';
import { LOGIN_PAGE_URL } from 'src/common/common-constants';

const LoginButton = (): JSX.Element => {
  const router = useRouter();
  const { setToken } = useAuthToken();
  const isAuthorized = useAuthorized();
  const handleLoginClick = useCallback(() => router.push(LOGIN_PAGE_URL), []);
  const handleLogoutClick = useCallback(() => setToken(''), [setToken]);
  return isAuthorized ? (
    <Button onClick={handleLogoutClick}>Logout</Button>
  ) : (
    <Button onClick={handleLoginClick}>Login</Button>
  );
};

export default LoginButton;
