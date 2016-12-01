import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import 'ignore-styles';
import { SINGLE_CATEGORY_MOCK } from '../../../mock/category';

let store;
const storeFake = (state) => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state })
});

import CategoryContainer from '../category-container';

const generateStore = ({ isFetching = false } = {}) => (
  storeFake({
    categoryReducer: {
      categories: [SINGLE_CATEGORY_MOCK],
      isFetching
    },
    productReducer: {}
  })
);

const render = (store) => (
  mount(<Provider store={store}>
    <CategoryContainer />
  </Provider>)
);

test('Should render the category content', () => {
  const categoryList = render(generateStore());
  expect(categoryList.find('.category-content').length).toBe(1);
});

test('Should have a loading indicator when it is loading', () => {
  const categoryList = render(generateStore({ isFetching: true }));
  expect(categoryList.find('.spinner').length).toBe(1);
});
