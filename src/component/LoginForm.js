import React from 'react';
import PropTypes from 'prop-types';
import EmailPasswordForm from './EmailPasswordForm';

const LoginForm = props => (
  <EmailPasswordForm {...props} title="Please Sign In" buttonText="Sign in" />
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
