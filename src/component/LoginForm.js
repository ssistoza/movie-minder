import React from 'react';
import PropTypes from 'prop-types';
import EmailPasswordForm from './EmailPasswordForm';

const LoginForm = props => (
  <EmailPasswordForm
    {...props}
    autoComplete="current-password"
    title="Please Sign In"
    buttonText="Sign in"
  />
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
