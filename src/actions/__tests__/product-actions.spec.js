import { shallow } from 'enzyme';
import * as productActions from '../product-actions';
import actions from '../index';
import configureMockStore from 'redux-mock-store'
import nock from 'nock'
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

test('Should create an action to request a category', () => {
  let categoryId;
  const expectedAction = {
    type: actions.REQUEST_PRODUCTS,
    categoryId
  };

  expect(productActions.requestProducts()).toEqual(expectedAction);
});

test('Should create an action to receive a category', () => {
  let categoryId;
  let products = [];
  const expectedAction = {
    type: actions.RECEIVE_PRODUCTS,
    products: [],
    categoryId
  };

  expect(productActions.receiveProducts(categoryId, products)).toEqual(expectedAction);
});

test('Should not dispatch any actions while there is a fetch in progress', () => {
  const store = mockStore({ productReducer: {
    products: [], isFetching: true
  }});
  store.dispatch(productActions.fetchProductsByCategoryId(1))
  expect(store.getActions().length).toBe(0);
});

test('Should make an API call on fetchProducts', (done) => {
  nock.cleanAll();
  nock('http://localhost:3000')
      .get('/products?categoryId=1')
      .reply(200, [{ productId: 1 }])

  const expectedActions = [
      { type: actions.REQUEST_PRODUCTS, categoryId: 1},
      { type: actions.RECEIVE_PRODUCTS, products: [{productId: 1}], categoryId: 1 }
    ];

  const store = mockStore({ products: [] })
  return store.dispatch(productActions.fetchProductsByCategoryId(1))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions)
      done();
    });
});

test('Should fetch when there is no state', () => {
  const result = productActions.shouldFetch();

  expect(result).toBe(true);
});

test('Should fetch when isFetching is false', () => {
  const result = productActions.shouldFetch({ productReducer: {
    isFetching: false
  }})

  expect(result).toBe(true);
});

test('Should not fetch when isFetching is true', () => {
  const result = productActions.shouldFetch({ productReducer: {
    isFetching: true
  }})

  expect(result).toBe(false);
});

test('Should make an API call on fetchProduct', (done) => {
  nock.cleanAll();
  nock('http://localhost:3000')
      .get('/products?productId=1')
      .reply(200, [{ productId: 1 }])

  const expectedActions = [
      { type: actions.REQUEST_PRODUCT, productId: 1},
      { type: actions.RECEIVE_PRODUCT, products: [{productId: 1}], productId: 1 }
    ];

  const store = mockStore({ products: [] })
  return store.dispatch(productActions.fetchProduct(1))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions)
      done();
    });
});
