import { shallow, mount } from 'enzyme';
import React from 'react';

import { ProductList, CategoryList } from '../generic-list';
const categories = [{
  categoryId: 1,
  categoryName: 'Category 1'
},
{
  categoryId: 2,
  categoryName: 'Category 2'
},
{
  categoryId: 3,
  categoryName: 'Category 3'
}];

const products = [{
  productId: 1,
  categoryId: 2,
  productName: 'Product 1',
  price: '£123'
}];

test('When CategoryList have no items passed, it should not fail', () => {
  const wrapper = shallow(<CategoryList items={[]} itemName='categoryName' />);

  expect(wrapper.find('ul').length).toEqual(1);
});

test('When CategoryList have items, it should render them', () => {
  const wrapper = shallow(<CategoryList
      items={categories}
      itemName='categoryName' />);

  expect(wrapper.find('li').length).toEqual(3);
});

test('CategoryList should also contains links under them', () => {
  const wrapper = mount(<CategoryList
      items={[categories[0]]}
      itemName='categoryName' />);

  expect(wrapper.find('li').find('a').length).toBe(1);
});

test('ProductList should contain price', () => {
  const wrapper = mount(<ProductList
      items={[products[0]]}
      itemName='productName'
      {...products[0]} />);

  expect(wrapper.find('span').text()).toEqual('£123');
});
