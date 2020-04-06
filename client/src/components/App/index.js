import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import { appSelector } from '../../selectors';
import Login from '../Login';
import Routes from '../Routes';

const App = () => {
  const { accessToken, authorized } = useSelector(appSelector, shallowEqual);
  const showLogin = !accessToken && !authorized;
  useAuth(accessToken, authorized);
  return <div className='container-xl flexBox flexColumn flexGrow-1'>{showLogin ? <Login /> : <Routes />}</div>;
};

export default App;
