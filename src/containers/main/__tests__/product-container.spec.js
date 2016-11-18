import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import 'ignore-styles';

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
      products: [{
        productId: 1,
        productName: 'A',
        price: '£13'
      }],
    },
    categoryReducer: {
      selectedCategory: {}
    }
  });
  render();
});

test('Should have a ProductList that has one element', () => {
  expect(wrapper.find('a').length).toBe(1);
});

test('Should have Filter', () => {
  expect(wrapper.find('input').prop('type')).toBe('text');
});
