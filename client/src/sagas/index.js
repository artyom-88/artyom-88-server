import { push } from 'react-router-redux';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  appAuthFailed,
  appAuthRequest,
  appAuthSucceeded,
  appUserFailed,
  appUserRequest,
  appUserSucceeded,
  blogLoadFailed,
  blogLoadListFailed,
  blogLoadListRequest,
  blogLoadListSucceeded,
  blogLoadRequest,
  blogLoadSucceeded,
  blogUpdateFailed,
  blogUpdateRequest,
  blogUpdateSucceeded,
} from '../action-creators';
import { APP_AUTH, APP_USER, BLOG_LOAD, BLOG_LOAD_LIST, BLOG_UPDATE } from '../actions';
import { auth, loadBlog, loadBlogList, updateBlog, user } from '../api';
import { MSG } from '../const';

function* appAuth({ payload }) {
  try {
    yield put(appAuthRequest());
    const { name, password } = payload;
    const response = yield call(() => auth(name, password));
    if (response.status === 201) {
      yield put(appAuthSucceeded(response.data.accessToken));
      yield put(push('/'));
    } else {
      yield put(appAuthFailed(MSG.AUTH_FAILED));
    }
  } catch (e) {
    yield put(appAuthFailed(MSG.AUTH_FAILED));
  }
}

function* appUser({ payload }) {
  try {
    yield put(appUserRequest());
    const response = yield call(() => user(payload.accessToken));
    if (response.status === 200) {
      yield put(appUserSucceeded());
    } else {
      yield put(appUserFailed());
    }
  } catch (e) {
    yield put(appUserFailed());
  }
}

function* blogListLoad() {
  try {
    yield put(blogLoadListRequest());
    const response = yield call(() => loadBlogList());
    if (response.status === 200) {
      yield put(blogLoadListSucceeded(response.data));
    } else {
      yield put(blogLoadListFailed());
    }
  } catch (e) {
    yield put(blogLoadListFailed());
  }
}

function* blogLoad({ payload }) {
  try {
    yield put(blogLoadRequest());
    const response = yield call(() => loadBlog(payload.id));
    if (response.status === 200) {
      yield put(blogLoadSucceeded(response.data));
    } else {
      yield put(blogLoadFailed());
    }
  } catch (e) {
    yield put(blogLoadFailed());
  }
}

function* blogUpdate({ payload }) {
  try {
    yield put(blogUpdateRequest());
    const response = yield call(() => updateBlog(payload.id, payload.item));
    if (response.status === 200) {
      yield put(blogUpdateSucceeded(response.data));
    } else {
      yield put(blogUpdateFailed());
    }
  } catch (e) {
    yield put(blogUpdateFailed());
  }
}

// TODO: split sagas
function* rootSaga() {
  yield takeLatest(APP_AUTH, appAuth);
  yield takeEvery(APP_USER, appUser);
  yield takeEvery(BLOG_LOAD_LIST, blogListLoad);
  yield takeEvery(BLOG_LOAD, blogLoad);
  yield takeEvery(BLOG_UPDATE, blogUpdate);
}

export default rootSaga;
