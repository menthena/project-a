import 'isomorphic-fetch';
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

export const requestProduct = productId => ({
  type: actions.REQUEST_PRODUCT,
  productId
});

export const receiveProduct = (productId, json) => ({
  type: actions.RECEIVE_PRODUCT,
  products: json,
  productId
});

export const selectProduct = product => dispatch => {
  dispatch(fetchProduct(product.productId));
  dispatch({
    type: actions.SELECT_PRODUCT,
    product
  });
};

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

export const fetchProduct = productId => (dispatch, getState) => {
  if (shouldFetch(getState())) {
    dispatch(requestProduct(productId));
    return fetch('http://localhost:3000/products?productId=' + productId)
      .then(response => response.json())
      .then(json => dispatch(receiveProduct(productId, json)));
  }
};
