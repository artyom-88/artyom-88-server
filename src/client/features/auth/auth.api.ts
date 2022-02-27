import api from 'src/client/app/api.client';

export const auth = async (username, password) =>
  api.post(
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
  api.get('user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
