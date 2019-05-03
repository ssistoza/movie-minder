import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  let middlewares = [];

  if (process.env !== 'production') {
    middlewares = [thunkMiddleware];
  } else {
    middlewares = [thunkMiddleware, loggerMiddleware];
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composeEnhancer =
    process.env !== 'production'
      ? composeWithDevTools(...enhancers)
      : compose(...enhancers);

  return createStore(rootReducer, preloadedState, composeEnhancer);
}
