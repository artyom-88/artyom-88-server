import {
  APP_AUTH_FAILED,
  APP_AUTH_REQUEST,
  APP_AUTH_SUCCEEDED,
  APP_LOGOUT,
  APP_USER_REQUEST,
  APP_USER_SUCCEEDED,
  APP_USER_FAILED,
} from '../actions';

const initialState = {
  accessToken: null,
  authorized: false,
  error: null,
  loading: false,
};

/**
 * App state reducer
 */
const app = (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_AUTH_REQUEST: {
      return { ...state, error: null, loading: true };
    }
    case APP_AUTH_SUCCEEDED: {
      const { accessToken } = payload;
      return { ...state, accessToken, authorized: true, error: null, loading: false };
    }
    case APP_AUTH_FAILED: {
      const { error } = payload;
      return { ...state, accessToken: null, error, loading: false };
    }
    case APP_LOGOUT: {
      return { ...state, accessToken: null, authorized: false };
    }
    case APP_USER_REQUEST: {
      return { ...state, loading: true };
    }
    case APP_USER_SUCCEEDED: {
      return { ...state, authorized: true, loading: false };
    }
    case APP_USER_FAILED: {
      return { ...state, accessToken: null, authorized: false, loading: false };
    }
    default: {
      return state;
    }
  }
};

export default app;
