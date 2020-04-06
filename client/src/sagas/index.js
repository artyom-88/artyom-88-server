import { push } from 'react-router-redux';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  APP_AUTH,
  APP_USER,
  appAuthFailed,
  appAuthRequest,
  appAuthSucceeded,
  appUserFailed,
  appUserRequest,
  appUserSucceeded,
  BLOG_LOAD_LIST,
  blogLoadListFailed,
  blogLoadListRequest,
  blogLoadListSucceeded,
} from '../actions';
import { auth, loadBlogList, user } from '../api';
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

function* rootSaga() {
  yield takeLatest(APP_AUTH, appAuth);
  yield takeEvery(APP_USER, appUser);
  yield takeEvery(BLOG_LOAD_LIST, blogListLoad);
}

export default rootSaga;
