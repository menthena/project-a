import actions from '../actions/index';

let initialState = {
  categories: [],
  selectedCategory: null,
  isFetching: false
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REQUEST_CATEGORIES:
      return {
        ...state,
        isFetching: true
      };
    case actions.RECEIVE_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        categories: action.categories
      };
    case actions.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.category
      }
    default:
      return state;
  }
}

export default categoryReducer;
