import actions from '../actions/index';

let initialState = {
  categories: [],
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
    default:
      return state;
  }
}

export default categoryReducer;
