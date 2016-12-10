import { shallow, mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import { SINGLE_PRODUCT_MOCK } from '../../mock/product';

import ProductListItem from '../product-list-item';

let product = SINGLE_PRODUCT_MOCK;
product.itemName = product['productName'];

const spy = sinon.spy();

test('Should render the list item name', () => {
  const wrapper = mount(
    <ProductListItem
      {...product}
      price=""
      handleOnClick={() => {}} />
    );

  expect(wrapper.find('.product-name').text()).toEqual('Product 1');
});

test('Should bind an onclick event to the list item and execute it on click', () => {
  const wrapper = shallow(
    <ProductListItem
      {...product}
      handleOnClick={spy} />
    );

  wrapper.find('Link').simulate('click');

  expect(spy.called).toBe(true);
});

test('Should contain the price', () => {
  const wrapper = shallow(
    <ProductListItem
      {...product}
      handleOnClick={spy} />
    );

  expect(wrapper.find('.product-price').text()).toEqual('£123');
});
