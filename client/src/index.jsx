import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { useHistory } from 'react-router';
import { HashRouter } from 'react-router-dom';
import './assets/styles.scss';
import App from './components/App';
import configStore from './store';

const HistoryWrapper = () => {
  const history = useHistory();
  return (
    <Provider store={configStore(history)}>
      <App />
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <HistoryWrapper />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
