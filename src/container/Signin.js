import React from 'react';
import { withRouter } from 'react-router';
import LoginForm from '../component/LoginForm';
import { FirebaseContext } from '../firebase';

class Signin extends React.Component {
  static contextType = FirebaseContext;

  handleSignin = async event => {
    event.preventDefault();
    const { email, password } = event.target;
    try {
      const user = await this.context.signInWithEmailAndPassword(
        email.value,
        password.value
      );
      console.log(user, 'passed');
      this.props.history.push('/home');
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return <LoginForm onSubmit={this.handleSignin} />;
  }
} // Signin

export default withRouter(Signin);
