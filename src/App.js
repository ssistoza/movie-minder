import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FirebaseContext } from './firebase';
import Sidebar from './component/Sidebar';
import PrivateRoute from './component/PrivateRoute';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Signout from './pages/signout';
import Home from './pages/home';
import './App.css';

class App extends React.Component {
  state = {
    auth: false,
    loading: false,
    user: null,
  };

  static contextType = FirebaseContext;

  componentWillMount() {
    this.context.auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          auth: true,
          user: user,
          loading: false,
        });
      } else {
        this.setState({
          auth: false,
          user: null,
          loading: false,
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <Sidebar>
          <PrivateRoute
            exact
            path="/home"
            component={Home}
            auth={this.state.auth}
          />
          <PrivateRoute
            exact
            path="/list"
            component={Home}
            auth={this.state.auth}
          />
          <Route exact path="/login" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute
            exact
            path="/signout"
            component={Signout}
            auth={this.state.auth}
          />
        </Sidebar>
      </Router>
    );
  }
}

export default App;
