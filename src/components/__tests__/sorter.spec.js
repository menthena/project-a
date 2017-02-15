import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Sorter from '../sorter';

let spy;
const render = ({ displayOptions = false } = {}) => {
  spy = sinon.spy();
  return shallow(
    <Sorter
      handleOnChange={spy}
      sortBy="reviewcount"
      displayOptions={displayOptions}
    />)
};

test('renders a flex column', () => {
  const sorter = render();
  expect(sorter.is('div.sorter')).toBe(true);
});

test('doesn`t render a list of sorting options by default', () => {
  const sorter = render();
  expect(sorter.find('ul').length).toEqual(0);
});

test('renders a list of sorting options when the user hovers', () => {
  const sorter = render({
    displayOptions: true
  });
  expect(sorter.find('ul li').length).toEqual(4);
});

test('renders the selected option`s text', () => {
  const sorter = render({
    displayOptions: true
  });
  const selectedOption = sorter.find('a').first();
  expect(selectedOption.text()).toEqual('Good reviews');
});

test('calls on change handler', () => {
  const sorter = render({
    displayOptions: true
  });
  const option = sorter.find('li a').first();
  option.simulate('click');
  expect(spy.called).toBe(true);
});
