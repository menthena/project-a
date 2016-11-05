import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import 'ignore-styles';

let store;
const storeFake = (state) => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state })
});

import CategoryContainer from '../categoryContainer';

beforeEach(() => {
  store = storeFake({
    categoryReducer: {
      categories: [{
        categoryId: 1,
        categoryName: 'A'
      }]
    },
    productReducer: {}
  });
});

test('Should have a CategoryList', () => {
  const wrapper = mount(
    <Provider store={store}>
      <CategoryContainer />
    </Provider>
  );
  expect(wrapper.find('CategoryContainer').length).toBe(1);
});
