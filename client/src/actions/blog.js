export const BLOG_LOAD_LIST = 'BLOG_LOAD_LIST';
export const BLOG_LOAD_LIST_REQUEST = 'BLOG_LOAD_LIST_REQUEST';
export const BLOG_LOAD_LIST_SUCCEEDED = 'BLOG_LOAD_LIST_SUCCEEDED';
export const BLOG_LOAD_LIST_FAILED = 'BLOG_LOAD_LIST_FAILED';
export const BLOG_LOAD = 'BLOG_LOAD';
export const BLOG_LOAD_REQUEST = 'BLOG_LOAD_REQUEST';
export const BLOG_LOAD_SUCCEEDED = 'BLOG_LOAD_SUCCEEDED';
export const BLOG_LOAD_FAILED = 'BLOG_LOAD_FAILED';

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
