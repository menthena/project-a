import 'isomorphic-fetch'
import actions from './index';

export const requestProducts = categoryId => ({
  type: actions.REQUEST_PRODUCTS,
  categoryId
});

export const receiveProducts = (categoryId, json) => ({
  type: actions.RECEIVE_PRODUCTS,
  products: json,
  categoryId
});

export const selectProduct = (product) => ({
  type: actions.SELECT_PRODUCT,
  product
});

export const shouldFetch = (state) => {
  if (state && state.productReducer) {
    const isFetching = state.productReducer.isFetching
    return !isFetching;
  }
  return true;
}

export const filterProducts = (categoryId, query) => {
  return {
    type: actions.FILTER_PRODUCTS,
    categoryId,
    query
  };
};

export const fetchProductsByCategoryId = categoryId => (dispatch, getState) => {
  if (shouldFetch(getState())) {
    dispatch(requestProducts(categoryId));
    return fetch('http://localhost:3000/products?categoryId=' + categoryId)
      .then(response => response.json())
      .then(json => dispatch(receiveProducts(categoryId, json)));
  }
};
