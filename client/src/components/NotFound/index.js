import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../Page';

const NotFound = () => (
  <Page title='Page Not Found'>
    <Link to='/'>Go to main page</Link>
  </Page>
);

export default NotFound;
