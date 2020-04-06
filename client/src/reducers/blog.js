import {
  BLOG_LOAD_FAILED,
  BLOG_LOAD_LIST_FAILED,
  BLOG_LOAD_LIST_REQUEST,
  BLOG_LOAD_LIST_SUCCEEDED,
  BLOG_LOAD_REQUEST,
  BLOG_LOAD_SUCCEEDED,
} from '../actions';
import wrapper from './wrapper';

const initialState = {
  list: [],
};

/**
 * Blog state reducers
 */
const reducers = {
  [BLOG_LOAD_LIST_REQUEST]: (state) => {
    return { ...state, error: null, loading: true };
  },
  [BLOG_LOAD_LIST_SUCCEEDED]: (state, payload) => {
    const { list } = payload;
    return { ...state, error: null, list, loading: false };
  },
  [BLOG_LOAD_LIST_FAILED]: (state, payload) => {
    const { error } = payload;
    return { ...state, error, list: [], loading: false };
  },
  [BLOG_LOAD_REQUEST]: (state) => {
    return { ...state, error: null, loading: true };
  },
  [BLOG_LOAD_SUCCEEDED]: (state, payload) => {
    const { item } = payload;
    const { _id: id } = item;
    const stateList = state.list;
    const list = stateList.length ? state.list.map((listItem) => (listItem['_id'] === id ? item : listItem)) : [item];
    return { ...state, error: null, list, loading: false };
  },
  [BLOG_LOAD_FAILED]: (state, payload) => {
    const { error } = payload;
    return { ...state, error, loading: false };
  },
};

const blog = wrapper(reducers, initialState);

export default blog;
