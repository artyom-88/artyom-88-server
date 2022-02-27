import { onRequest, wrap } from '../../common/reducers.helper';
import {
  BLOG_CREATE_FAILED,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_SUCCEEDED,
  BLOG_LOAD_FAILED,
  BLOG_LOAD_LIST_FAILED,
  BLOG_LOAD_LIST_REQUEST,
  BLOG_LOAD_LIST_SUCCEEDED,
  BLOG_LOAD_REQUEST,
  BLOG_LOAD_SUCCEEDED,
  BLOG_UPDATE_FAILED,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_SUCCEEDED,
} from '../actions';
import Blog from './model/Blog';

const initialState = {
  list: [],
};

const onLoadItemSuccess = (state, payload) => {
  const { item } = payload;
  const { _id: id } = item;
  const newItem = Blog.fromDto(item);
  const stateList = state.list;
  const list = stateList.length ? state.list.map((listItem) => (listItem.id === id ? newItem : listItem)) : [newItem];
  return { ...state, error: null, list, loading: false };
};

const onWriteItemFailure = (state, payload) => {
  const { error } = payload;
  return { ...state, error, loading: false };
};

/**
 * Blog state reducers
 */
const reducers = {
  [BLOG_LOAD_LIST_REQUEST]: onRequest,
  [BLOG_LOAD_LIST_SUCCEEDED]: (state, payload) => {
    const list = payload.list.map((item) => Blog.fromDto(item));
    return { ...state, error: null, list, loading: false };
  },
  [BLOG_LOAD_LIST_FAILED]: (state, payload) => {
    const { error } = payload;
    return { ...state, error, list: [], loading: false };
  },
  [BLOG_LOAD_REQUEST]: onRequest,
  [BLOG_LOAD_SUCCEEDED]: onLoadItemSuccess,
  [BLOG_LOAD_FAILED]: onWriteItemFailure,
  [BLOG_CREATE_REQUEST]: onRequest,
  [BLOG_CREATE_SUCCEEDED]: onLoadItemSuccess,
  [BLOG_CREATE_FAILED]: onWriteItemFailure,
  [BLOG_UPDATE_REQUEST]: onRequest,
  [BLOG_UPDATE_SUCCEEDED]: onLoadItemSuccess,
  [BLOG_UPDATE_FAILED]: onWriteItemFailure,
};

const blogReducer = wrap(reducers, initialState);

export default blogReducer;
