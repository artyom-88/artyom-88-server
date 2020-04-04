import { call, put, takeLatest } from 'redux-saga/effects';
import { APP_AUTH, appAuthFailed, appAuthRequest, appAuthSucceeded } from '../actions';
import { auth } from '../api';
import { MSG } from '../const';

function* appAuth({ payload }) {
  try {
    yield put(appAuthRequest());
    const response = yield call(() => auth(payload.name, payload.password));
    if (response.status === 201) {
      yield put(appAuthSucceeded(response.data.accessToken));
    } else {
      yield put(appAuthFailed(MSG.AUTH_FAILED));
    }
  } catch (e) {
    yield put(appAuthFailed(MSG.AUTH_FAILED));
  }
}

function* rootSaga() {
  yield takeLatest(APP_AUTH, appAuth);
}

export default rootSaga;
