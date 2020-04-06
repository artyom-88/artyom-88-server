import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { appUser } from '../../actions';
import { appSelector } from '../../selectors';
import Login from '../Login';
import Routes from '../Routes';

const LOGIN_PATH = '/login';

const App = () => {
  const { accessToken, authorized } = useSelector(appSelector, shallowEqual);
  const history = useHistory();
  const location = useLocation();
  const showLogin = !accessToken && !authorized;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authorized) {
      if (accessToken) {
        dispatch(appUser(accessToken));
      } else if (location.pathname !== LOGIN_PATH) {
        history.push(LOGIN_PATH);
      }
    }
  }, [accessToken, authorized, dispatch, history, location]);

  return <div className='container-xl flexBox flexColumn flexGrow-1'>{showLogin ? <Login /> : <Routes />}</div>;
};

export default App;
