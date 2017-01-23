import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Sorter from '../sorter';

let spy;
const render = () => {
  spy = sinon.spy();
  return shallow(<Sorter handleOnChange={spy} />)
};

test('renders a selectbox', () => {
  const sorter = render();
  expect(sorter.is('select')).toBe(true);
});

test('renders a list of sorting options', () => {
  const sorter = render();
  expect(sorter.find('option').length).toEqual(4);
});

test('displays the text and passes the id of the option', () => {
  const sorter = render();
  const firstOption = sorter.find('option').first();
  expect(firstOption.props().value).toEqual('review');
  expect(firstOption.text()).toEqual('Good reviews');
});

test('calls on change handler', () => {
  const sorter = render();
  sorter.simulate('change');
  expect(spy.called).toBe(true);
});
