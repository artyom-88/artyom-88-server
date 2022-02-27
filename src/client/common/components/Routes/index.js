import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Blog from '../../../features/blog/components/Blog';
import { default as BlogCard } from '../../../features/blog/components/Blog/Card';
import Career from '../../../features/career/components/Career';
import Login from '../Login';
import Main from '../Main';
import Menu from '../Menu';
import NotFound from '../NotFound';

const Routes = () => (
  <div className='ag-flexbox flexColumn'>
    <Menu />
    <div className='ag-flexbox flexColumn flexGrow-1'>
      <Switch>
        <Redirect from='/main' to='/' />
        <Route exact={true} path='/' component={Main} />
        <Route exact={true} path='/blogReducer' component={Blog} />
        <Route exact={true} path='/blogReducer/:id' component={BlogCard} />
        <Route exact={true} path='/career' component={Career} />
        <Route exact={true} path='/login' component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
);

export default Routes;
