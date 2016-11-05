import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'redux-throttle';
import reducers from '../reducers/index';

const defaultThrottleOption = { // https://lodash.com/docs#throttle
  leading: true,
  trailing: false
}

const throttleMiddleWare = throttle(500, defaultThrottleOption);    //default 500ms,
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
   reducers,
   composeEnhancers(applyMiddleware(thunk, throttleMiddleWare))
);

export default store;
