import PropTypes from 'prop-types';
import React, {useCallback} from 'react';
import Form from '../Form';
import Page from '../Page';

const inputs = [{
  field: 'name',
  label: 'Name',
  required: true,
}, {
  autocomplete: 'current-password',
  field: 'password',
  label: 'Password',
  required: true,
  type: 'password',
}];

const Login = ({authHandler}) => {
  const onSubmit = useCallback(() => {
    // TODO:
  }, [authHandler]);

  return (
    <Page
      className='flexBox flexColumn justifyContentCenter alignItemsCenter flexGrow-1'
      title='Login'
    >
      <Form
        inputs={inputs}
        onSubmit={onSubmit}
      />
    </Page>
  );
};

Login.propTypes = {
  authHandler: PropTypes.func.isRequired
};

export default Login;
