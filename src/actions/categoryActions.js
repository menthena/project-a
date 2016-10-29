import 'isomorphic-fetch'
import actions from './index';

export const requestCategories = query => ({
  type: actions.REQUEST_CATEGORIES,
  query
});

export const receiveCategories = (query, json) => ({
  type: actions.RECEIVE_CATEGORIES,
  categories: json,
  query
});

export const fetchCategories = query => dispatch => {
  dispatch(requestCategories);
  return fetch('http://localhost:3000/categories')
    .then(response => response.json())
    .then(json => dispatch(receiveCategories(query, json)));
};
