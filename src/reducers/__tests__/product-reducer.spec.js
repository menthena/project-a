import productReducer from '../product-reducer';

test('sets the initial state', () => {
  const state = productReducer(undefined, {});

  expect(state.isFetching).toBe(false);
  expect(state.products).toEqual([]);
  expect(state.sortBy).toEqual('review');
});

test('requests the product list', () => {
  const state = productReducer(undefined, { type: 'REQUEST_PRODUCTS' });

  expect(state.isFetching).toBe(true);
  expect(state.products).toEqual([]);
});

test('receives the product list', () => {
  const state = productReducer({}, {
    type: 'RECEIVE_PRODUCTS',
    products: [{}, {}]
  });

  expect(state.isFetching).toBe(false);
  expect(state.products.length).toBe(2);
});

test('sorts the product list', () => {
  const state = productReducer({}, {
    type: 'SORT_PRODUCTS',
    sortBy: 'reviewcount'
  });

  expect(state.sortBy).toBe('reviewcount');
});

test('selects a product', () => {
  const product = {
    productId: 1
  };
  const state = productReducer({}, {
    type: 'SELECT_PRODUCT',
    product: product
  });

  expect(state.selectedProduct).toEqual(product);
});

test('displays the sort options', () => {
  const state = productReducer({}, {
    type: 'DISPLAY_SORT_OPTIONS'
  });

  expect(state.displaySortOptions).toBe(true);
});

test('hides the sort options', () => {
  const state = productReducer({}, {
    type: 'HIDE_SORT_OPTIONS'
  });

  expect(state.displaySortOptions).toBe(false);
});
