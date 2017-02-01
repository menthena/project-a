import React from 'react';
import { shallow } from 'enzyme';

import Prime from '../../product/prime';

const render = (primeClass) => (
  shallow(<Prime primeClass={primeClass} />)
);

test('doesn`t render when the product doesnt`t have prime', () => {
  const prime = render();
  expect(prime.props().className).toBeUndefined();
});

test('renders the prime icon when the product has prime', () => {
  const prime = render('prime');
  expect(prime.is('.prime')).toBe(true);
});

test('adds light same-day text when the product same day service', () => {
  const prime = render('prime-sameday');
  expect(prime.is('.prime-sameday')).toBe(true);
});
