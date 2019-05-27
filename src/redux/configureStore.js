import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk  from 'redux-thunk';

export default function configureStore() {
  const middleWares = [
    reduxImmutableStateInvariant(),
    thunk
  ];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middleWares)
    )
  );
}
