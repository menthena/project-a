import 'isomorphic-fetch'
import actions from './index';
import {fetchProductsByCategoryId} from './productActions';

export const requestCategories = query => ({
  type: actions.REQUEST_CATEGORIES,
  query
});

export const receiveCategories = (query, json) => ({
  type: actions.RECEIVE_CATEGORIES,
  categories: json,
  query
});

export const selectCategory = (category) => dispatch => {
  dispatch(fetchProductsByCategoryId(category.categoryId));
  dispatch({
    type: actions.SELECT_CATEGORY,
    category: category
  });
};

export const shouldFetch = (state) => {
  if (state && state.categoryReducer) {
    const isFetching = state.categoryReducer.isFetching;
    return !isFetching;
  }
  return true;
};

export const fetchCategories = query => (dispatch, getState) => {
  if (shouldFetch(getState())) {
    dispatch(requestCategories());
    return fetch('http://localhost:3000/categories')
      .then(response => response.json())
      .then(json => dispatch(receiveCategories(query, json)));
  }
};
