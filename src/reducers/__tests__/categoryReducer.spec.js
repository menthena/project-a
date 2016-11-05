import categoryReducer from '../categoryReducer';

test('Initial State', () => {
  const state = categoryReducer(undefined, {});

  expect(state.isFetching).toBe(false);
  expect(state.categories).toEqual([]);
});

test('Request Categories', () => {
  const state = categoryReducer(undefined, { type: 'REQUEST_CATEGORIES' });

  expect(state.isFetching).toBe(true);
  expect(state.categories).toEqual([]);
});

test('Receive Categories', () => {
  const state = categoryReducer({}, {
    type: 'RECEIVE_CATEGORIES',
    categories: [{}, {}]
  });

  expect(state.isFetching).toBe(false);
  expect(state.categories.length).toBe(2);
});

test('Select Category', () => {
  const category = {
    categoryId: 1
  };
  const state = categoryReducer({}, {
    type: 'SELECT_CATEGORY',
    category: category
  });

  expect(state.selectedCategory).toEqual(category);
});
