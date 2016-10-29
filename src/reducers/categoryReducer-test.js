import test from 'ava';
import categoryReducer from './categoryReducer';

test('Initial State', t => {
  t.plan(2);
  const state = categoryReducer(undefined, {});

  t.false(state.isFetching);
  t.deepEqual(state.categories, []);
});

test('Request Categories', t => {
  t.plan(2);
  const state = categoryReducer(undefined, { type: 'REQUEST_CATEGORIES' });

  t.true(state.isFetching);
  t.deepEqual(state.categories, []);
});

test('Receive Categories', t => {
  t.plan(2);
  const state = categoryReducer({}, {
    type: 'RECEIVE_CATEGORIES',
    categories: [{}, {}]
  });

  t.false(state.isFetching);
  t.is(state.categories.length, 2);
});
