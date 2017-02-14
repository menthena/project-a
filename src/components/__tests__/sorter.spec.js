import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Sorter from '../sorter';

let spy;
const render = () => {
  spy = sinon.spy();
  return shallow(<Sorter handleOnChange={spy} sortBy="reviewcount" />)
};

test('renders a flex column', () => {
  const sorter = render();
  expect(sorter.is('div.sorter')).toBe(true);
});

test('renders a list of sorting options', () => {
  const sorter = render();
  expect(sorter.find('ul li').length).toEqual(4);
});

test('renders the selected option`s text', () => {
  const sorter = render();
  const selectedOption = sorter.find('a').first();
  expect(selectedOption.text()).toEqual('Good reviews');
});

test('calls on change handler', () => {
  const sorter = render();
  const option = sorter.find('li a').first();
  option.simulate('click');
  expect(spy.called).toBe(true);
});
