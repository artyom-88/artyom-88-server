import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { blogLoadList } from '../../actions';
import Page from '../Page';
import List from './List';

const Blog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(blogLoadList());
  }, [dispatch]);

  return (
    <Page title='Blog'>
      <List />
    </Page>
  );
};

export default Blog;
