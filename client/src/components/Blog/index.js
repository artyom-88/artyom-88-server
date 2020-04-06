import React, { useEffect } from 'react';
import { blogLoadList } from '../../actions';
import Page from '../Page';
import List from './List';

const Blog = () => {
  useEffect(() => {
    blogLoadList();
  }, []);

  return (
    <Page title='Blog'>
      <List />
    </Page>
  );
};

export default Blog;
