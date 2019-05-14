import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router/immutable';
import rootReducer from './reducer';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(routerMiddleware(history), thunk))
  );
  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      store.replaceReducer(rootReducer(history));
    });
  }
  return store;
}
