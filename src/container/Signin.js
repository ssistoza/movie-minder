import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import LoginForm from '../component/LoginForm';
import { signinWithFirebase } from '../redux/actions';

/** CONTAINER
 * Class to allows users to sign-in to movie-minder app.
 * - mapDispatchToProps are not binded, this is the only component that should handle signing in.
 * - Upon authentication, user will be moved to the homepage.
 *
 * @class      Signin (name)
 */
class Signin extends React.Component {
  // Routes to Homepage once user has logged in.
  componentDidUpdate(prevProps) {
    const { authenticated, history } = this.props;
    if (authenticated.user) history.push('/home');
  }

  handleSignin = async event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { email, password } = event.target;
    dispatch(signinWithFirebase(email.value, password.value));
  };

  render() {
    return <LoginForm onSubmit={this.handleSignin} />;
  }
} // Signin

function mapStateToProps(state) {
  const authenticated = state.authenticated;
  return { authenticated };
}

export default compose(
  connect(mapStateToProps),
  withRouter
)(Signin);
