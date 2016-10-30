import test from 'ava';
import productReducer from './productReducer';

test('Initial State', t => {
  t.plan(2);
  const state = productReducer(undefined, {});

  t.false(state.isFetching);
  t.deepEqual(state.products, []);
});

test('Request Products', t => {
  t.plan(2);
  const state = productReducer(undefined, { type: 'REQUEST_PRODUCTS' });

  t.true(state.isFetching);
  t.deepEqual(state.products, []);
});

test('Receive Products', t => {
  t.plan(2);
  const state = productReducer({}, {
    type: 'RECEIVE_PRODUCTS',
    products: [{}, {}]
  });

  t.false(state.isFetching);
  t.is(state.products.length, 2);
});
