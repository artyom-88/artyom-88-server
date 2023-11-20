import httpClient from 'src/client/app/http-client';

export const loginApi = (username: string, password: string): Promise<{ authToken: string }> =>
  httpClient
    .post('auth/login', {
      json: {
        username,
        password,
      },
    })
    .json();

export const checkAuthTokenApi = (token: string): Promise<Promise<Record<string, unknown>>> =>
  httpClient
    .get('auth/check-token', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .json();
