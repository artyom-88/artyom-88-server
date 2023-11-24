import { useAuthToken } from './use-auth-token';

export const useAuthorized = (): boolean => {
  const { token } = useAuthToken();
  return token.length > 0;
};
