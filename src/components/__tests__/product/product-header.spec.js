import React from 'react';
import { shallow } from 'enzyme';

import ProductHeader from '../../product/product-header';

const render = ({
  productName = 'Product name',
  price = '£13',
  review = 5
} = {}) => {
  const props = {
    productName,
    price,
    review
  };
  return shallow(<ProductHeader {...props} />);
};

test('Should display the product data', () => {
  const element = render();
  expect(element.find('h1').text()).toBe('Product name');
  expect(element.find('div.price').text()).toBe('£13');
  expect(element.find('div.review').text()).toBe('5 stars');
});
