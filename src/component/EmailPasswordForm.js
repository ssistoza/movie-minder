import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import PageTitle from './PageTitle';

const EmailPasswordForm = ({ onSubmit, title, buttonText }) => (
  <>
    {title ? <PageTitle title={title} /> : null}
    <Form onSubmit={onSubmit}>
      <Form.Field>
        <label>Email</label>
        <input placeholder="johndoe@gmail.com" type="email" name="email" />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input type="password" name="password" />
      </Form.Field>
      <Button type="submit">{buttonText}</Button>
    </Form>
  </>
);

EmailPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
};

export default EmailPasswordForm;
