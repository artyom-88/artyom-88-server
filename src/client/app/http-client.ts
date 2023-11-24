import type { KyInstance } from 'ky-universal';
import ky from 'ky-universal';
import { API_URL } from 'src/common/common-constants';

export const httpClient: KyInstance = ky.create({
  headers: {
    'Content-Type': 'application/json',
  },
  prefixUrl: API_URL,
  retry: 0,
});

export default httpClient;
