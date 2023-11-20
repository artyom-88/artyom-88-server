import { ChangeEvent, JSX, useCallback, useState } from 'react';

import { Button } from '@mui/base/Button';
import { Input } from '@mui/base/Input';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { loginApi } from 'src/client/features/auth/auth-api';
import { useAuthToken } from 'src/client/features/auth/hooks/use-auth-token';

import styles from './AuthForm.module.scss';

const AuthForm = (): JSX.Element => {
  const router = useRouter();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { setToken } = useAuthToken();
  const { mutate } = useMutation<string>({
    mutationFn: async () => {
      if (!login) {
        setError('Invalid login');
        return '';
      }
      if (!password) {
        setError('Invalid password');
        return '';
      }
      const { authToken } = await loginApi(login, password);
      return authToken;
    },
    onSuccess: (token: string) => {
      setToken(token);
      void router.push('/');
    },
    onError: (error) => {
      setError(error.message);
    },
  });
  const handleLoginChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => setLogin(target.value), []);
  const handlePasswordChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => setPassword(target.value),
    []
  );
  const handleLogin = useCallback(() => mutate(), [mutate]);
  return (
    <div className={`ag-flexbox ag-flexColumn ag-flexColumn ag-justifyContent_center ${styles.form}`}>
      <div className={styles.formItem}>
        <Input placeholder='Login' onChange={handleLoginChange} />
      </div>
      <div className={styles.formItem}>
        <Input placeholder='Password' type='password' onChange={handlePasswordChange} />
      </div>
      <div className={styles.formItem}>
        <Button onClick={handleLogin}>Login</Button>
      </div>
      {error ? <div className={`${styles.formItem} ${styles.error}`}>{error}</div> : null}
    </div>
  );
};

export default AuthForm;
