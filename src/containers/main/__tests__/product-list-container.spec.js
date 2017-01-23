import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import 'ignore-styles';
import { SINGLE_PRODUCT_MOCK } from '../../../mock/product';

let store;
let wrapper;
const storeFake = (state) => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state })
});

import ProductListContainer from '../product-list-container';

const render = () => {
  wrapper = mount(
    <Provider store={store}>
      <ProductListContainer />
    </Provider>
  )
};

beforeEach(() => {
  store = storeFake({
    productReducer: {
      products: [SINGLE_PRODUCT_MOCK],
    },
    categoryReducer: {
      selectedCategory: {}
    }
  });
  render();
});

test('renders a ProductListItem component through ProductList', () => {
  expect(wrapper.find('ProductListItem').length).toBe(1);
});

test('renders a Filter component', () => {
  expect(wrapper.find('Filter').length).toBe(1);
});

test('renders a Sorter component', () => {
  expect(wrapper.find('Sorter').length).toBe(1);
});

test('wraps filter and sorter with flex', () => {
  expect(wrapper.find('.flex').length).toBe(1);
});
