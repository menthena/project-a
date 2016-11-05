import actions from '../actions/index';

let initialState = {
  products: [],
  isFetching: false
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REQUEST_PRODUCTS:
      return {
        ...state,
        isFetching: true
      };
    case actions.RECEIVE_PRODUCTS:
      return {
        ...state,
        isFetching: false,
        products: action.products
      };
    case actions.SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.product
      };
    default:
      return state;
  }
}

export default productReducer;
