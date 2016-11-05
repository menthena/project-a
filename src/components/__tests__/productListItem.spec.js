import { shallow, mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import ProductListItem from '../productListItem';

const product = {
  itemName: 'List item name',
  price: '£123'
};
const spy = sinon.spy();

test('Should render the list item name', () => {
  const wrapper = mount(
    <ProductListItem
      {...product}
      price=""
      handleOnClick={() => {}} />
    );

  expect(wrapper.text()).toEqual('List item name');
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

  expect(wrapper.find('span').text()).toEqual('£123');
});
