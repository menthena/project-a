import productReducer from '../productReducer';

test('Initial State', () => {
  const state = productReducer(undefined, {});

  expect(state.isFetching).toBe(false);
  expect(state.products).toEqual([]);
});

test('Request Products', () => {
  const state = productReducer(undefined, { type: 'REQUEST_PRODUCTS' });

  expect(state.isFetching).toBe(true);
  expect(state.products).toEqual([]);
});

test('Receive Products', () => {
  const state = productReducer({}, {
    type: 'RECEIVE_PRODUCTS',
    products: [{}, {}]
  });

  expect(state.isFetching).toBe(false);
  expect(state.products.length).toBe(2);
});

test('Select Product', () => {
  const product = {
    productId: 1
  };
  const state = productReducer({}, {
    type: 'SELECT_PRODUCT',
    product: product
  });

  expect(state.selectedProduct).toEqual(product);
});
