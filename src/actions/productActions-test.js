import test from 'ava';
import { shallow } from 'enzyme';
import * as productActions from './productActions';
import actions from './index';
import configureMockStore from 'redux-mock-store'
import nock from 'nock'
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

test('should create an action to request a category', t => {
  let categoryId;
  const expectedAction = {
    type: actions.REQUEST_PRODUCTS,
    categoryId
  };

  t.deepEqual(productActions.requestProducts(), expectedAction);
});

test('should create an action to receive a category', t => {
  let categoryId;
  let products = [];
  const expectedAction = {
    type: actions.RECEIVE_PRODUCTS,
    products: [],
    categoryId
  };

  t.deepEqual(productActions.receiveProducts(categoryId, products), expectedAction);
});

test('should make an API call on fetchProducts', t => {
  let categoryId;
  nock.cleanAll();
  nock('http://localhost:3000')
      .get('/products/1')
      .reply(200, [{ productId: 1 }])

  const expectedActions = [
      { type: actions.RECEIVE_PRODUCTS, products: [{productId: 1}], categoryId: 1 }
    ];

  const store = mockStore({ products: [] })
  return store.dispatch(productActions.fetchProductsByCategoryId(1))
    .then(() => {
      t.deepEqual(store.getActions(), expectedActions)
    })
});
