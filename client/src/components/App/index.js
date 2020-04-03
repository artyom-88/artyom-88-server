import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { appSelector } from '../../selectors';
import Login from '../Login';
import Routes from '../Routes';

const LOGIN_PATH = '/login';

const App = () => {
  const { authorized } = useSelector(appSelector, shallowEqual);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (!authorized && location.pathname !== LOGIN_PATH) {
      history.push(LOGIN_PATH);
    }
  }, [history, location, authorized]);

  return <div className='container-xl flexBox flexColumn flexGrow-1'>{authorized ? <Routes /> : <Login />}</div>;
};

export default App;
