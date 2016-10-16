import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Query from './query';

test('Query should have a title', t => {
  const wrapper = shallow(<Query title='A title' />);

  t.is(wrapper.find('label').text(), 'A title');
});

test('When the user types something the state changes', t => {
  const wrapper = shallow(<Query title='A title' />);
  const input = wrapper.find('input');
  input.simulate('change', {
    target: {
      value: 'A text'
    }
  });
  t.is(wrapper.state().query, 'A text');
  input.simulate('change', {
    target: {
      value: ''
    }
  });
  t.is(wrapper.state().query, '');
});
