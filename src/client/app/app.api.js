// TODO: add encryption or SSL
import axios from 'axios';
import { API_PATH } from '../common/common.constants';

export const auth = async (username, password) =>
  axios.post(
    `${API_PATH}/auth`,
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
  axios.get(`${API_PATH}/user`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
