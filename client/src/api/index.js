import axios from 'axios';

// TODO: add encryption or SSL
export const auth = async (username, password) =>
  axios.post(
    '/api/auth',
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
  axios.get(`/api/user`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
