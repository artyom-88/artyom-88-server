import {
  BLOG_CREATE,
  BLOG_CREATE_FAILED,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_SUCCEEDED,
  BLOG_LOAD,
  BLOG_LOAD_FAILED,
  BLOG_LOAD_LIST,
  BLOG_LOAD_LIST_FAILED,
  BLOG_LOAD_LIST_REQUEST,
  BLOG_LOAD_LIST_SUCCEEDED,
  BLOG_LOAD_REQUEST,
  BLOG_LOAD_SUCCEEDED,
  BLOG_UPDATE,
  BLOG_UPDATE_FAILED,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_SUCCEEDED,
} from '../../actions';

export const blogLoadList = () => ({
  type: BLOG_LOAD_LIST,
});

export const blogLoadListRequest = () => ({
  type: BLOG_LOAD_LIST_REQUEST,
});

export const blogLoadListSucceeded = (list) => ({
  type: BLOG_LOAD_LIST_SUCCEEDED,
  payload: { list },
});

export const blogLoadListFailed = (error) => ({
  type: BLOG_LOAD_LIST_FAILED,
  payload: { error },
});

export const blogLoad = (id) => ({
  type: BLOG_LOAD,
  payload: { id },
});

export const blogLoadRequest = () => ({
  type: BLOG_LOAD_REQUEST,
});

export const blogLoadSucceeded = (item) => ({
  type: BLOG_LOAD_SUCCEEDED,
  payload: { item },
});

export const blogLoadFailed = (error) => ({
  type: BLOG_LOAD_FAILED,
  payload: { error },
});

export const blogCreate = (item) => ({
  type: BLOG_CREATE,
  payload: { item },
});

export const blogCreateRequest = () => ({
  type: BLOG_CREATE_REQUEST,
});

export const blogCreateSucceeded = (item) => ({
  type: BLOG_CREATE_SUCCEEDED,
  payload: { item },
});

export const blogCreateFailed = (error) => ({
  type: BLOG_CREATE_FAILED,
  payload: { error },
});

export const blogUpdate = (id, item) => ({
  type: BLOG_UPDATE,
  payload: { id, item },
});

export const blogUpdateRequest = () => ({
  type: BLOG_UPDATE_REQUEST,
});

export const blogUpdateSucceeded = (item) => ({
  type: BLOG_UPDATE_SUCCEEDED,
  payload: { item },
});

export const blogUpdateFailed = (error) => ({
  type: BLOG_UPDATE_FAILED,
  payload: { error },
});
