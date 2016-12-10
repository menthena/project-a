import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
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

import ProductContainer from '../product-container';

const render = () => {
  wrapper = mount(
    <Provider store={store}>
      <ProductContainer />
    </Provider>
  )
};

beforeEach(() => {
  store = storeFake({
    productReducer: {
      products: [SINGLE_PRODUCT_MOCK],
      selectedProduct: SINGLE_PRODUCT_MOCK
    },
    categoryReducer: {
      selectedCategory: {}
    }
  });
  render();
});

test('Should have a header', () => {
  expect(wrapper.find('ProductHeader').length).toBe(1);
});
