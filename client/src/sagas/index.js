import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { APP_AUTH, appAuthFailed, appAuthRequest, appAuthSucceeded } from '../actions';

function* appAuth(action) {
  try {
    yield put(appAuthRequest());
    const response = yield call(() => {
      return axios.get('/api/auth', action.payload);
    });
    debugger;
    if (response.status === 200) {
      yield put(appAuthSucceeded());
    } else {
      yield put(appAuthFailed('Bag request'));
    }
  } catch (e) {
    yield put(appAuthFailed(e.message));
  }
}

function* rootSaga() {
  yield takeLatest(APP_AUTH, appAuth);
}

export default rootSaga;
