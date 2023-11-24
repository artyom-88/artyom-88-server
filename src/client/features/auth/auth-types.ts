export interface AuthStore {
  setToken: (token: string) => void;
  token: string;
}
