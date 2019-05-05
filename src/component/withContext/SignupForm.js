import React from 'react';
import PropTypes from 'prop-types';
import EmailPasswordForm from '../EmailPasswordForm';

const SignupForm = ({ onSubmit }) => (
  <EmailPasswordForm onSubmit={onSubmit} buttonText="Sign up" />
);

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
