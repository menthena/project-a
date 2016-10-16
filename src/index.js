/**
 * App entry point
 */

// Polyfill
import 'babel-polyfill';
import { Provider } from 'react-redux';
import store from './stores/store';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

// Routes
import routes from './routes';

// Base styling
import './styles/base.css';


// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';

// Render the router
ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
), document.getElementById(DOM_APP_EL_ID));
