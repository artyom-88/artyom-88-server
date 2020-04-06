import {
  APP_AUTH_FAILED,
  APP_AUTH_REQUEST,
  APP_AUTH_SUCCEEDED,
  APP_LOGOUT,
  APP_USER_FAILED,
  APP_USER_REQUEST,
  APP_USER_SUCCEEDED,
} from '../actions';

const initialState = {
  accessToken: null,
  authorized: false,
  error: null,
  loading: false,
};

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

/**
 * App state reducer
 */
const app = (state = initialState, { type, payload }) => {
  if (reducers.hasOwnProperty(type)) {
    return reducers[type](state, payload);
  }
  return state;
};

export default app;
