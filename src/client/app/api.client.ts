import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { isServer, PORT } from 'src/common/constants/common.constants';

const apiClient: AxiosInstance = axios.create();

const wrapUrl = (url: string): string =>
  isServer && url.startsWith('/') ? `http://localhost:${PORT}/api/${url}` : `/api/${url}`;

apiClient.interceptors.request.use((config: AxiosRequestConfig) => ({
  ...config,
  url: wrapUrl(config.url),
}));

export default apiClient;
