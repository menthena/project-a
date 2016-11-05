import { shallow } from 'enzyme';
import * as categoryActions from '../categoryActions';
import actions from '../index';
import configureMockStore from 'redux-mock-store'
import nock from 'nock'
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

test('Should create an action to request a category', () => {
  let query;
  const expectedAction = {
    type: actions.REQUEST_CATEGORIES,
    query
  };

  expect(categoryActions.requestCategories()).toEqual(expectedAction);
});

test('Should create an action to receive a category', () => {
  let query;
  let categories = [];
  const expectedAction = {
    type: actions.RECEIVE_CATEGORIES,
    categories: [],
    query
  };

  expect(categoryActions.receiveCategories(query, categories)).toEqual(expectedAction);
});

test('Should not dispatch any actions while there is a fetch in progress', () => {
  const store = mockStore({ categories: [], isFetching: true });
  store.dispatch(categoryActions.fetchCategories())
    .then(() => {
      expect(store.getActions().length).toBe(0);
    });
});

test('Should make an API call on fetchCategories', () => {
  let query;
  nock.cleanAll();
  nock('http://localhost:3000')
      .get('/categories')
      .reply(200, [{ categoryId: 1 }])

  const expectedActions = [
      { type: actions.REQUEST_CATEGORIES, query },
      { type: actions.RECEIVE_CATEGORIES, categories: [{categoryId: 1}], query }
    ];

  const store = mockStore({ categories: [] })
  return store.dispatch(categoryActions.fetchCategories())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
});

test('Should fetch when there is no state', () => {
  const result = categoryActions.shouldFetch();

  expect(result).toBe(true);
});

test('Should fetch when isFetching is false', () => {
  const result = categoryActions.shouldFetch({ categoryReducer: {
    isFetching: false
  }})

  expect(result).toBe(true);
});

test('should fetch when isFetching is false', () => {
  const result = categoryActions.shouldFetch({ categoryReducer: {
    isFetching: true
  }})

  expect(result).toBe(false);
});
