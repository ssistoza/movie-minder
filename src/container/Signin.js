import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { signinWithFirebase } from '../redux/actions/User';
import LoginForm from '../component/LoginForm';

/** CONTAINER
 * Class to allow users to sign-in to movie-minder app.
 * - Upon authentication, user will be moved to the homepage.
 *
 * @class      Signin (name)
 */
class Signin extends React.Component {
  componentDidMount() {
    const { authenticated, history } = this.props;
    if (authenticated) {
      history.push('/home');
    } else {
      // TODO : START REMOVE THIS.
      this.props.dispatch(
        signinWithFirebase(
          process.env.REACT_APP_LOGIN_EMAIL,
          process.env.REACT_APP_LOGIN_PWD
        )
      );
    }
  }

  // Routes to Homepage once user has logged in.
  componentDidUpdate(prevProps) {
    const { authenticated, history } = this.props;
    if (authenticated) history.push('/home');
  }

  handleSignin = async event => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.dispatch(signinWithFirebase(email.value, password.value));
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
