import React, { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { appAuth, appLogout } from '../../action-creators';
import { appSelector } from '../../selectors';
import Form from '../Form';
import Page from '../Page';

const inputs = [
  {
    autocomplete: 'username',
    field: 'name',
    label: 'Name',
    placeholder: 'Enter user name',
    required: true,
  },
  {
    autocomplete: 'current-password',
    field: 'password',
    label: 'Password',
    placeholder: 'Enter password',
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
    <Page className='ag-flexbox flexColumn' title='Login Page'>
      {authorized ? (
        <>
          <div>You are authorized</div>
          <button onClick={logOut} className='btn btn-danger' type='button'>
            Log out
          </button>
        </>
      ) : (
        <Form inputs={inputs} onSubmit={auth} />
      )}
    </Page>
  );
};

export default Login;
