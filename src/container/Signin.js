import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { signinWithFirebase } from '../redux/actions/User';
import { init } from '../redux/actions';
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
      this.props.dispatch(init());
      history.push('/home');
    } else {
      if (process.env !== 'production') {
        this.props.dispatch(
          signinWithFirebase(
            process.env.REACT_APP_LOGIN_EMAIL,
            process.env.REACT_APP_LOGIN_PWD
          )
        );
      }
    }
  }

  // Routes to Homepage once user has logged in.
  componentDidUpdate(prevProps) {
    const { authenticated, history } = this.props;
    if (authenticated) {
      this.props.dispatch(init());
      history.push('/home');
    }
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
