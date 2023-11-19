import httpClient from 'src/client/app/http-client';

export const auth = async (username, password) =>
  httpClient.post(`auth`, {
    json: {
      username,
      password,
    },
  });

export const user = async (accessToken) =>
  httpClient.get('user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
