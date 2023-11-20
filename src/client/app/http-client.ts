import type { KyInstance } from 'ky-universal';
import ky from 'ky-universal';
import { PORT } from 'src/common/common-constants';

export const httpClient: KyInstance = ky.create({
  headers: {
    'Content-Type': 'application/json',
  },
  prefixUrl: `http://localhost:${PORT}/api`,
  retry: 0,
});

export default httpClient;
