import { BLOG_LOAD_LIST_FAILED, BLOG_LOAD_LIST_REQUEST, BLOG_LOAD_LIST_SUCCEEDED } from '../actions';

const initialState = {
  list: [],
};

const blog = (state = initialState, { type, payload }) => {
  switch (type) {
    case BLOG_LOAD_LIST_REQUEST: {
      return { ...state, error: null, loading: true };
    }
    case BLOG_LOAD_LIST_SUCCEEDED: {
      const { list } = payload;
      return { ...state, error: null, list, loading: false };
    }
    case BLOG_LOAD_LIST_FAILED: {
      const { error } = payload;
      return { ...state, error, list: [], loading: false };
    }
    default: {
      return state;
    }
  }
};

export default blog;
