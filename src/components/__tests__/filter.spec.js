import React from 'react';
import Filter from '../filter';
import { shallow } from 'enzyme';

let wrapper, input, value, mockFunc = jest.fn((action) => {
  value = action.which;
});
beforeEach(() => {
  wrapper = shallow(<Filter
      labelText="Filter:"
      placeholder="Filter the product"
      handleOnChange={mockFunc}
      value={value} />);
  input = wrapper.find('input');
});

test('Should have a label', () => {
  expect(wrapper.find('label').length).toBe(1);
});

test('Should have an input', () => {
  expect(wrapper.find('input').length).toBe(1);
});

test('Should render the label that is passed', () => {
  expect(wrapper.find('label').text()).toBe('Filter:');
});

test('Should render the placeholder that is passed', () => {
  expect(wrapper.find('input[placeholder="Filter the product"]').length).toBe(1);
});

test('Should fire onchange event when the user start typing', () => {
  input.simulate('change', { which: 'starting to type', target: { value: 'starting to type' } });
  expect(mockFunc).toBeCalled();
});

test('Should fire onchange event when the user start typing', () => {
  input.simulate('change', { which: 'filter me', target: { value: 'filter me' }  });
  test('invoking change', () => {
    expect(input.props().value).toBe('filter me');
  });
});
