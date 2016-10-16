import actions from '../actions/index';

let initialState = {
  nutritions: []
};

const nutritionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVE_NUTRITIONS:
      return { ...state,
        nutritions: action.nutritions.hits
      };
    default:
      return state;
  }
}

export default nutritionReducer;
