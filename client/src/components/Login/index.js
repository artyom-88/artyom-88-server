import React, { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { appAuth } from '../../actions';
import { appSelector } from '../../selectors';
import Form from '../Form';
import Page from '../Page';

const inputs = [
  {
    field: 'name',
    label: 'Name',
    required: true,
  },
  {
    autocomplete: 'current-password',
    field: 'password',
    label: 'Password',
    required: true,
    type: 'password',
  },
];

const Login = () => {
  const { authorized } = useSelector(appSelector, shallowEqual);
  const dispatch = useDispatch();

  const authChangeHandler = useCallback(() => {
    dispatch(appAuth(!authorized));
  }, [authorized, dispatch]);

  return (
    <Page className='flexBox flexColumn justifyContentCenter alignItemsCenter flexGrow-1' title='Login Page'>
      {authorized ? (
        <>
          <div>You are authorized</div>
          <button onClick={authChangeHandler}>Log out</button>
        </>
      ) : (
        <Form inputs={inputs} onSubmit={authChangeHandler} />
      )}
    </Page>
  );
};

export default Login;
