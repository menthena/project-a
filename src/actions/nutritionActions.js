import actions from './index';

export const requestNutrition = query => ({
  type: actions.FETCH_NUTRITION,
  query
});

export const receiveNutritions = (query, json) => ({
  type: actions.RECEIVE_NUTRITIONS,
  nutritions: json,
  query
});

export const fetchNutrition = query => dispatch => {
  dispatch(requestNutrition);
  return fetch('https://api.nutritionix.com/v1_1/search/cheddar%20cheese?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=9ec62216&appKey=4c20e0def9c0c80eb919d05e5cfef45d')
    .then(response => response.json())
    .then(json => dispatch(receiveNutritions(query, json)));
};
