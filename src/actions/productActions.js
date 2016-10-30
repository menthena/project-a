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

export const fetchProductsByCategoryId = categoryId => dispatch => {
  dispatch(requestProducts);
  return fetch('http://localhost:3000/products/' + categoryId)
    .then(response => response.json())
    .then(json => dispatch(receiveProducts(categoryId, json)));
};
