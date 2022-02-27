import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Login from '../../../common/components/Login';
import Routes from '../../../common/components/Routes';
import useAuth from '../../../common/hooks/useAuth';
import { appSelector } from '../../../common/selectors';

const App = () => {
  const { accessToken, authorized } = useSelector(appSelector, shallowEqual);
  const showLogin = !accessToken && !authorized;
  useAuth(accessToken, authorized);
  return <div className='container-xl ag-flexbox flexColumn flexGrow-1'>{showLogin ? <Login /> : <Routes />}</div>;
};

export default App;
