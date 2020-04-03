import { APP_AUTH_FAILED, APP_AUTH_REQUEST, APP_AUTH_SUCCEEDED, APP_LOGOUT } from '../actions';

const initialState = {
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
      return { ...state, loading: true, error: null };
    }
    case APP_AUTH_SUCCEEDED: {
      return { ...state, loading: false, authorized: true, error: null };
    }
    case APP_AUTH_FAILED: {
      const { error } = payload;
      return { ...state, loading: false, error };
    }
    case APP_LOGOUT: {
      return { ...state, authorized: false };
    }
    default: {
      return state;
    }
  }
};

export default app;
