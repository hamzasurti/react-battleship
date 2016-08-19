import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';

// if (process.env.BROWSER) {
//   require('../../client/hi.js');
// }

// Grab the state from a global injected into server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(todoApp, preloadedState)
document.write('<link rel="stylesheet" type="text/css" href="/client/styles.css">');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
