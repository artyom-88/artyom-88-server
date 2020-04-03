export const APP_AUTH = 'APP_AUTH';
export const APP_AUTH_REQUEST = 'APP_AUTH_REQUEST';
export const APP_AUTH_SUCCEEDED = 'APP_AUTH_SUCCEEDED';
export const APP_AUTH_FAILED = 'APP_AUTH_FAILED';
export const APP_LOGOUT = 'APP_LOGOUT';

export const appAuth = (credentials) => ({
  type: APP_AUTH,
  payload: credentials,
});

export const appAuthRequest = () => ({
  type: APP_AUTH_REQUEST,
});

export const appAuthSucceeded = () => ({
  type: APP_AUTH_SUCCEEDED,
});

export const appAuthFailed = (error) => ({
  type: APP_AUTH_FAILED,
  payload: { error },
});

export const appLogout = () => ({
  type: APP_LOGOUT,
});
