import React from 'react';
import PropTypes from 'prop-types';
import EmailPasswordForm from './EmailPasswordForm';

const SignupForm = props => (
  <EmailPasswordForm
    {...props}
    autocomplete="new-password"
    title="Sign up for an account"
    buttonText="Sign up"
  />
);

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
