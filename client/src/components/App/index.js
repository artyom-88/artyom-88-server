import React, {useEffect} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {useHistory, useLocation} from 'react-router';
import {Redirect, Route, Switch} from 'react-router-dom';
import {appSelector} from '../../selectors';
import Career from '../Career';
import Login from '../Login';
import Main from '../Main';
import Menu from '../Menu';
import NotFound from '../NotFound';

const LOGIN_PATH = '/login';

const App = () => {
  const {authorized} = useSelector(appSelector, shallowEqual);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (!authorized && location.pathname !== LOGIN_PATH) {
      history.push(LOGIN_PATH);
    }
  }, [history, location, authorized]);

  return (
    <div className='container-xl flexBox flexColumn flexGrow-1'>
      {authorized
        ? (
          <div className='flexBox flexColumn'>
            <Menu/>
            <div className='flexBox flexColumn flexGrow-1'>
              <Switch>
                <Redirect from='/main' to='/'/>
                <Route exact={true} path='/' component={Main}/>
                <Route exact={true} path='/career' component={Career}/>
                <Route exact={true} path='/login' component={Login}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        ) : (
          <Switch>
            <Login/>
          </Switch>
        )
      }
    </div>
  );
};

export default App;
