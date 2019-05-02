import React from 'react';
import { withRouter } from 'react-router';
import SignupForm from '../component/SignupForm';
import { FirebaseContext } from '../firebase';

class Signup extends React.Component {
  static contextType = FirebaseContext;

  handleSignUp = async event => {
    event.preventDefault();

    const { email, password } = event.target;
    console.log('email: ', email.value);
    console.log('password: ', password.value);
    try {
      const user = await this.context.createUserWithEmailAndPassword(
        email.value,
        password.value
      );
      this.props.history.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return <SignupForm onSubmit={this.handleSignUp} />;
  }
} // Signup

export default withRouter(Signup);
