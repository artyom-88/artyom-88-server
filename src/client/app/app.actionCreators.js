import {
  APP_AUTH,
  APP_AUTH_FAILED,
  APP_AUTH_REQUEST,
  APP_AUTH_SUCCEEDED,
  APP_LOGOUT,
  APP_USER,
  APP_USER_FAILED,
  APP_USER_REQUEST,
  APP_USER_SUCCEEDED,
} from '../actions';

export const appAuth = (credentials) => ({
  type: APP_AUTH,
  payload: credentials,
});

export const appAuthRequest = () => ({
  type: APP_AUTH_REQUEST,
});

export const appAuthSucceeded = (accessToken) => ({
  type: APP_AUTH_SUCCEEDED,
  payload: { accessToken },
});

export const appAuthFailed = (error) => ({
  type: APP_AUTH_FAILED,
  payload: { error },
});

export const appLogout = () => ({
  type: APP_LOGOUT,
});

export const appUser = (accessToken) => ({
  type: APP_USER,
  payload: { accessToken },
});

export const appUserRequest = () => ({
  type: APP_USER_REQUEST,
});

export const appUserSucceeded = () => ({
  type: APP_USER_SUCCEEDED,
});

export const appUserFailed = () => ({
  type: APP_USER_FAILED,
});
