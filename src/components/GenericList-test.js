import test from 'ava';
import { shallow, mount } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';

import GenericList from './GenericList';

test('When GenericList have no items passed, it should not fail', t => {
  const wrapper = shallow(<GenericList items={[]} />);

  t.is(wrapper.find('ul').length, 1);
});

test('When GenericList have items, it should render them', t => {
  const items = [{
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
  const wrapper = shallow(<GenericList items={items} />);

  t.is(wrapper.find('li').length, 3);
});

test('GenericLists should also contains links under them', t => {
  const items = [{
    categoryId: 1,
    categoryName: 'Category 1'
  }];
  const wrapper = mount(<GenericList items={items} />);
  t.is(wrapper.find('li').find('a').length, 1);
});
