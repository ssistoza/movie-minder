import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Firebase, { FirebaseContext } from './firebase';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux';

import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

ReactDOM.render(
  <FirebaseContext.Provider value={Firebase}>
    <Provider store={store}>
      <App />
    </Provider>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
