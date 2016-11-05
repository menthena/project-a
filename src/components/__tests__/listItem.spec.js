import { shallow, mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import ListItem from '../listItem';

let spy, item;

beforeEach(() => {
  spy = sinon.spy();
  item = <ListItem
    itemName={'List item name'}
    handleOnClick={spy} />;
});

test('Should render the list item name', () => {
  const wrapper = mount(item);
  expect(wrapper.text()).toEqual('List item name');
});

test('Should bind an onclick event to the list item and execute it on click', () => {
  const wrapper = shallow(item);
  wrapper.find('Link').simulate('click');
  expect(spy.called).toBe(true);
});
