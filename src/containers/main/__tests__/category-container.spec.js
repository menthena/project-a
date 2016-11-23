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

beforeEach(() => {
  store = storeFake({
    categoryReducer: {
      categories: [SINGLE_CATEGORY_MOCK]
    },
    productReducer: {}
  });
});

test('Should have a CategoryList that has one element', () => {
  const wrapper = mount(
    <Provider store={store}>
      <CategoryContainer />
    </Provider>
  );
  expect(wrapper.find('a').length).toBe(1);
});
