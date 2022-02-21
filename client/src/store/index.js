import { composeWithDevTools } from '@redux-devtools/extension';
import { debounce } from 'debounce';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';

const DEBOUNCE_TIME = 1000;
const sagaMiddleware = createSagaMiddleware();
const accessToken = localStorage.getItem('accessToken');
const persistedState = accessToken ? { app: { accessToken } } : {};

let store = null;

const onStateChange = debounce(() => {
  const { app } = store.getState();
  const accessToken = localStorage.getItem('accessToken');
  if (app.accessToken !== accessToken) {
    localStorage.setItem('accessToken', app.accessToken || '');
  }
}, DEBOUNCE_TIME);

const configStore = () => {
  if (!store) {
    // to avoid multiple store creation
    const middlewareEnhancer = applyMiddleware(sagaMiddleware);

    store = createStore(reducers, persistedState, composeWithDevTools(middlewareEnhancer));

    store.subscribe(onStateChange);

    // noinspection JSUnresolvedFunction https://github.com/redux-saga/redux-saga/issues/2013
    sagaMiddleware.run(rootSaga);
  }
  return store;
};

export default configStore();
