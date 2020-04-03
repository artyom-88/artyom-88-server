import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import './assets/styles.scss';
import App from './components/App';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
