import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './assets/styles.scss';
import App from './components/App';
import configStore from './store';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configStore(history)}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
