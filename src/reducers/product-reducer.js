import actions from '../actions/index';

let initialState = {
  products: [],
  isFetching: false,
  sortBy: 'review',
  displaySortOptions: false
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
    case actions.SORT_PRODUCTS:
      return {
        ...state,
        sortBy: action.sortBy
      };
    case actions.DISPLAY_SORT_OPTIONS:
      return {
        ...state,
        displaySortOptions: true
      };
    case actions.HIDE_SORT_OPTIONS:
      return {
        ...state,
        displaySortOptions: false
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
