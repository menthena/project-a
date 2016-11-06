import { createStore, applyMiddleware, compose } from 'redux';
import { takeEvery } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import throttle from 'redux-throttle';
import reducers from '../reducers/index';
import { watchFilterProducts } from '../actions/productSagas';

const sagaMiddleware = createSagaMiddleware();
const defaultThrottleOption = { // https://lodash.com/docs#throttle
  leading: true,
  trailing: false
}

const throttleMiddleWare = throttle(500, defaultThrottleOption);    //default 500ms,
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk, sagaMiddleware];
const store = createStore(
   reducers,
   composeEnhancers(applyMiddleware(...middlewares, throttleMiddleWare))
);

function* rootSaga() {
    yield [
      fork(watchFilterProducts)
    ]
}

sagaMiddleware.run(rootSaga);

export default store;
