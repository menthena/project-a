import test from 'ava';
import { shallow } from 'enzyme';
import * as categoryActions from './categoryActions';
import actions from './index';
import configureMockStore from 'redux-mock-store'
import nock from 'nock'
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

test('should create an action to request a category', t => {
  let query;
  const expectedAction = {
    type: actions.REQUEST_CATEGORIES,
    query
  };

  t.deepEqual(categoryActions.requestCategories(), expectedAction);
});

test('should create an action to receive a category', t => {
  let query;
  let categories = [];
  const expectedAction = {
    type: actions.RECEIVE_CATEGORIES,
    categories: [],
    query
  };

  t.deepEqual(categoryActions.receiveCategories(query, categories), expectedAction);
});

test('should make an API call on fetchCategories', t => {
  let query;
  nock.cleanAll();
  nock('http://localhost:3000')
      .get('/categories')
      .reply(200, [{ categoryId: 1 }])

  const expectedActions = [
      { type: actions.RECEIVE_CATEGORIES, categories: [{categoryId: 1}], query }
    ];

  const store = mockStore({ categories: [] })
  return store.dispatch(categoryActions.fetchCategories())
    .then(() => {
      t.deepEqual(store.getActions(), expectedActions)
    })
});
