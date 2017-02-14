import { takeLatest, delay } from 'redux-saga';
import { fork, call, put, wait } from 'redux-saga/effects';
import 'isomorphic-fetch';
import actions from './index';
import * as productActions from './product-actions';

const buildSortQueryString = (sortIndex) => {
  switch (sortIndex) {
    case 'reviewcount':
      return '&_sort=review&_order=DESC';
      break;
    case 'lowprice':
      return '&_sort=price&_order=ASC';
      break;
    case 'highprice':
      return '&_sort=price&_order=DESC';
      break;
    default:
      return '&_sort=stars&_order=DESC';
  }
}

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
      '' + buildSortQueryString(payload.sortBy));
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
