import React from 'react';
import { FirebaseContext } from '../firebase';

class Signout extends React.Component {
  static contextType = FirebaseContext;

  componentDidMount() {
    this.context.signOut();
  }

  render() {
    return <div>Signing out...</div>;
  }
} // Signout

export default Signout;
