import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import configureStore, { history } from 'store';
import App from './App';

const initialState = Immutable.Map();
const store = configureStore(initialState);

const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    rootEl
  );
};

render();

if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render();
  });
}
