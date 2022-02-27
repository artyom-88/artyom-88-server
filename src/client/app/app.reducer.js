import {
  APP_AUTH_FAILED,
  APP_AUTH_REQUEST,
  APP_AUTH_SUCCEEDED,
  APP_LOGOUT,
  APP_USER_FAILED,
  APP_USER_REQUEST,
  APP_USER_SUCCEEDED,
} from '../actions';
import { onRequest, wrap } from '../common/reducers.helper';

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
  [APP_AUTH_REQUEST]: onRequest,
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
  [APP_USER_REQUEST]: onRequest,
  [APP_USER_SUCCEEDED]: (state) => {
    return { ...state, authorized: true, loading: false };
  },
  [APP_USER_FAILED]: (state) => {
    return { ...state, accessToken: null, authorized: false, loading: false };
  },
};

const appReducer = wrap(reducers, initialState);

export default appReducer;
