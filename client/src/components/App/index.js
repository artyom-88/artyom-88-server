import React, {useCallback, useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router';
import {Switch} from 'react-router-dom';
import {AuthContext} from '../../context';
import Login from '../Login';
import Routes from '../Routes';

const LOGIN_PATH = '/login';

const App = () => {
  const [authorized, setAuth] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const authHandler = useCallback(changed => setAuth(changed), [setAuth]);

  useEffect(() => {
    if (!authorized && location.pathname !== LOGIN_PATH) {
      history.push(LOGIN_PATH);
    }
  }, [history, location, authorized]);

  return (
    <div className='container-xl flexBox flexColumn flexGrow-1'>
      <AuthContext.Provider value={authorized}>
        {authorized
          ? <Routes/>
          : (
            <Switch>
              <Login authHandler={authHandler}/>
            </Switch>
          )
        }
      </AuthContext.Provider>
    </div>
  );
};

export default App;
