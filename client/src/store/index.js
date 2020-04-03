import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewareEnhancer = applyMiddleware(sagaMiddleware);

const store = createStore(reducers, composeWithDevTools(middlewareEnhancer));

// noinspection JSUnresolvedFunction https://github.com/redux-saga/redux-saga/issues/2013
sagaMiddleware.run(rootSaga);

export default store;
