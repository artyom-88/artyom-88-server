import React, { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { appAuth, appLogout } from '../../actions';
import { appSelector } from '../../selectors';
import Form from '../Form';
import Page from '../Page';

const inputs = [
  {
    autocomplete: 'username',
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

  const auth = useCallback(
    (form) => {
      dispatch(appAuth(form));
    },
    [dispatch]
  );

  const logOut = useCallback(() => {
    dispatch(appLogout());
  }, [dispatch]);

  return (
    <Page className='flexBox flexColumn' title='Login Page'>
      {authorized ? (
        <>
          <div>You are authorized</div>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        <Form inputs={inputs} onSubmit={auth} />
      )}
    </Page>
  );
};

export default Login;
