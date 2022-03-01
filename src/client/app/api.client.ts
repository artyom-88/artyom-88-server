import axios, { Axios, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { isServer, PORT } from 'src/common/constants/common.constants';

const axiosInstance: AxiosInstance = axios.create();

const wrapUrl = (url: string): string =>
  isServer && url.startsWith('/') ? `http://localhost:${PORT}/api/${url}` : `/api/${url}`;

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log(config);
  return config;
});

const apiClient: Partial<Axios> = {
  get: <T = unknown, R = AxiosResponse<T>, D = unknown>(url: string, params?: AxiosRequestConfig<D>) =>
    axiosInstance.get<T, R, D>(wrapUrl(url), params),
};

export default apiClient;
