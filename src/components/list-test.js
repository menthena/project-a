import test from 'ava';
import { shallow, mount } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';

import List from './list';

test('When List have no categories passed, it should not fail', t => {
  const wrapper = shallow(<List categories={[]} />);

  t.is(wrapper.find('ul').length, 1);
});

test('When List have categories, it should render them', t => {
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
  const wrapper = shallow(<List categories={categories} />);

  t.is(wrapper.find('li').length, 3);
});

test('Lists should also contains links under them', t => {
  const categories = [{
    categoryId: 1,
    categoryName: 'Category 1'
  }];
  const wrapper = mount(<List categories={categories} />);
  t.is(wrapper.find('li').find('a').length, 1);
});
