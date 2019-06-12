import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './redux';

describe('App', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    store = configureStore();
    wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('should not crash', () => {
    wrapper.contains(<App />);
  });
});
