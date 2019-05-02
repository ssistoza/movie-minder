import React from 'react';
import { connect } from 'react-redux';
import { signoutWithFirebase } from '../redux/actions';

class Signout extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(signoutWithFirebase());
  }

  render() {
    if (this.props.authenticated) return <div>Signing out...</div>;

    return <div>Signed out!</div>;
  }
} // Signout

function mapStateToProps(state) {
  const authenticated = state.authenticated;
  return { authenticated };
}

export default connect(mapStateToProps)(Signout);
