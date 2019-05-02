import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import PageTitle from './PageTitle';

const EmailPasswordForm = ({ onSubmit, title, buttonText, autoComplete }) => (
  <>
    <PageTitle title={title} />
    <Form onSubmit={onSubmit}>
      <Form.Field>
        <label>Email</label>
        <input
          autocomplete="username"
          placeholder="johndoe@gmail.com"
          type="email"
          name="email"
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input autocomplete={autoComplete} type="password" name="password" />
      </Form.Field>
      <Button type="submit">{buttonText}</Button>
    </Form>
  </>
);

export default EmailPasswordForm;
