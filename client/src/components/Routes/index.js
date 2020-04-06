import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Blog from '../Blog';
import { default as BlogCard } from '../Blog/Card';
import Career from '../Career';
import Login from '../Login';
import Main from '../Main';
import Menu from '../Menu';
import NotFound from '../NotFound';

const Routes = () => (
  <div className='flexBox flexColumn'>
    <Menu />
    <div className='flexBox flexColumn flexGrow-1'>
      <Switch>
        <Redirect from='/main' to='/' />
        <Route exact={true} path='/' component={Main} />
        <Route exact={true} path='/blog' component={Blog} />
        <Route exact={true} path='/blog/:id' component={BlogCard} />
        <Route exact={true} path='/career' component={Career} />
        <Route exact={true} path='/login' component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
);

export default Routes;
