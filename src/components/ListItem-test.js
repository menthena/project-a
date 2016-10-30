import test from 'ava';
import { shallow, mount } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import sinon from 'sinon';

import ListItem from './ListItem';

test('Should render the list item name', t => {
  const wrapper = mount(
    <ListItem
      itemName={'List item name'}
      handleOnClick={() => {}} />
    );

  t.is(wrapper.text(), 'List item name');
});

test('Should bind an onclick event to the list item and execute it on click', t => {
  const spy = sinon.spy();
  const wrapper = shallow(
    <ListItem
      itemName={'List item name'}
      handleOnClick={spy} />
    );

  wrapper.find('Link').simulate('click');

  t.true(spy.called);
});
