import apiClient from 'src/client/app/api.client';

export const auth = async (username, password) =>
  apiClient.post(
    `auth`,
    {
      username,
      password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

export const user = async (accessToken) =>
  apiClient.get('user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
