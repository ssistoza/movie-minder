import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Sidebar from './component/Sidebar';
import PrivateRoute from './component/PrivateRoute';

// Pages
import Signin from './pages/signin';
import Signup from './pages/signup';
import Signout from './pages/signout';
import Home from './pages/home';
import List from './pages/list';
import Movies from './pages/movies';

import { checkIfSignedIn } from './redux/actions';
import './App.css';

/**
 * Class for application.
 * - App needs to know who is signed in to be able to distinguish who can access the routes.
 * @class      App (name)
 */

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(checkIfSignedIn());
  }

  isAuthenticated = () => (this.props.authenticated ? true : false);

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Sidebar>
          <Switch>
            <PrivateRoute
              exact
              path="/home"
              component={Home}
              auth={this.isAuthenticated()}
            />
            <PrivateRoute
              exact
              path="/list"
              component={List}
              auth={this.isAuthenticated()}
            />
            <PrivateRoute
              exact
              path="/signout"
              component={Signout}
              auth={this.isAuthenticated()}
            />
            <PrivateRoute
              exact
              path="/movies"
              component={Movies}
              auth={this.isAuthenticated()}
            />
            <Route exact path="/signup" component={Signup} />
            <Route
              path="/"
              render={() => (
                <Signin
                  authenticated={this.isAuthenticated()}
                  actions={this.props.actions}
                />
              )}
            />
          </Switch>
        </Sidebar>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const authenticated = state.authenticated;
  return { authenticated };
}

export default connect(mapStateToProps)(App);
