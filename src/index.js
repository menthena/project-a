/**
 * App entry point
 */

// Polyfill
import 'babel-polyfill';
import { Provider } from 'react-redux';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

// Routes
import routes from './routes';
import { syncHistoryWithStore } from 'react-router-redux';

// Store
import store from './stores/store';

// Base styling
import './styles/base.css';

// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';

const history = syncHistoryWithStore(browserHistory, store)

// Render the router
ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
), document.getElementById(DOM_APP_EL_ID));
