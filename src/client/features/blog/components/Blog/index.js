import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Page from '../../../../common/components/Page';
import { blogCreate, blogLoadList } from '../../action-creators';
import List from './List';

const Blog = () => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const add = useCallback(() => setEdit(true), [setEdit]);
  const cancel = useCallback(() => setEdit(false), [setEdit]);
  const save = useCallback(
    (item) => {
      dispatch(blogCreate(item));
      setEdit(false);
    },
    [dispatch, setEdit]
  );

  useEffect(() => {
    dispatch(blogLoadList());
  }, [dispatch]);

  return (
    <Page
      title='Blog'
      buttons={
        <button
          className={`btn btn-${edit ? 'secondary' : 'success'}`}
          disabled={edit}
          onClick={add}
          title='Click to add new record'
          type='button'
        >
          Add
        </button>
      }
    >
      <List onCancel={cancel} edit={edit} onSave={save} />
    </Page>
  );
};

export default Blog;
