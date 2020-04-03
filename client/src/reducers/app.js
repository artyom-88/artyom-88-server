import {APP_AUTH} from '../actions';

const initialState = {
  authorized: false,
};

/**
 * App state reducer
 */
const app = (state = initialState, {type, payload}) => {
  switch (type) {
    case APP_AUTH: {
      const {authorized} = payload;
      return {...state, authorized};
    }
    default: {
      return state;
    }
  }
};

export default app;
