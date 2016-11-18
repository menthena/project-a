import React from 'react';
import { watchFilterProducts, filterProducts } from '../product-sagas';
import { delay } from 'redux-saga';
import { take, call, put } from 'redux-saga/effects';
import actions from '../index';
import * as productActions from '../product-actions';


let generator, next;
test('Should take only the last filter events and should not stop listening', () => {
  generator = watchFilterProducts();
  next = generator.next();
  expect(next.value).toEqual(take(actions.FILTER_PRODUCTS));
  next = generator.next();
  expect(next.done).toBe(false);
});

test('Should fetch data and once it is resolved, it should call receive products', () => {
  generator = filterProducts({ categoryId: 1, query: 'computer' });
  next = generator.next();
  expect(next.value).toEqual(call(delay, 200));
  next = generator.next();
  expect(next.value).toEqual(call(fetch,
    'http://localhost:3000/products?categoryId=1&productName_like=computer')
  );
  next = generator.next();
  expect(next.value).toEqual(put(productActions.receiveProducts(1, undefined)));
});
