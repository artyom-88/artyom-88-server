import {
  APP_AUTH_FAILED,
  APP_AUTH_REQUEST,
  APP_AUTH_SUCCEEDED,
  APP_LOGOUT,
  APP_USER_FAILED,
  APP_USER_REQUEST,
  APP_USER_SUCCEEDED,
} from '../actions';
import wrapper from './wrapper';

const initialState = {
  accessToken: null,
  authorized: false,
  error: null,
  loading: false,
};

/**
 * App state reducers
 */
const reducers = {
  [APP_AUTH_REQUEST]: (state) => {
    return { ...state, error: null, loading: true };
  },
  [APP_AUTH_SUCCEEDED]: (state, { accessToken }) => {
    return {
      ...state,
      accessToken,
      authorized: true,
      error: null,
      loading: false,
    };
  },
  [APP_AUTH_FAILED]: (state, { error }) => {
    return { ...state, accessToken: null, error, loading: false };
  },
  [APP_LOGOUT]: (state) => {
    return { ...state, accessToken: null, authorized: false };
  },
  [APP_USER_REQUEST]: (state) => {
    return { ...state, loading: true };
  },
  [APP_USER_SUCCEEDED]: (state) => {
    return { ...state, authorized: true, loading: false };
  },
  [APP_USER_FAILED]: (state) => {
    return { ...state, accessToken: null, authorized: false, loading: false };
  },
};

const app = wrapper(reducers, initialState);

export default app;
