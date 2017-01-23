import { takeLatest, delay } from 'redux-saga';
import { fork, call, put, wait } from 'redux-saga/effects';
import 'isomorphic-fetch';
import actions from './index';
import * as productActions from './product-actions';

export function* filterProducts(payload) {
  try {
    yield call(delay, 200);
    let response = yield call(fetch,
      'http://localhost:3000/products?categoryId=' + payload.categoryId +
      '&productName_like=' + payload.query);
    if (response) {
      response = yield response.json();
    }
    yield put(productActions.receiveProducts(payload.categoryId, response));
  } catch (e) {
    yield put(productActions.unableReceivingProducts());
  }
}
export function* sortProducts(payload) {
  try {
    yield call(delay, 200);
    let response = yield call(fetch,
      'http://localhost:3000/products?categoryId=' + payload.categoryId +
      '&sort=' + payload.sortIndex);
    if (response) {
      response = yield response.json();
    }
    yield put(productActions.receiveProducts(payload.categoryId, response));
  } catch (e) {
    yield put(productActions.unableReceivingProducts());
  }
}

export function* watchSortProducts() {
  yield* takeLatest(actions.SORT_PRODUCTS, sortProducts);
}

export function* watchFilterProducts() {
  yield* takeLatest(actions.FILTER_PRODUCTS, filterProducts);
}
