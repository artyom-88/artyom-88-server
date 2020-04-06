import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { appUser } from '../actions';

const LOGIN_PATH = '/login';

const useAuth = (accessToken, authorized) => {
  const history = useHistory();
  const location = useLocation();
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
};

export default useAuth;
