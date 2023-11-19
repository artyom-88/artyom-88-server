import type { KyInstance } from 'ky-universal';
import ky from 'ky-universal';
import { isServer, PORT } from 'src/common/constants/common.constants';

export const httpClient: KyInstance = ky.create({
  headers: {
    'Content-Type': 'application/json',
  },
  prefixUrl: isServer ? `http://localhost:${PORT}/api` : '/api',
  retry: 0,
});

export default httpClient;
