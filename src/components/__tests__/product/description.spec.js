import React from 'react';
import { shallow } from 'enzyme';

import Description from '../../product/description';

const render = () => shallow(<Description>a description</Description>);

test('renders the description', () => {
  const description = render();
  const article = description.find('article');
  expect(article.text()).toBe('a description');
});

test('adds a description header with a border at the bottom', () => {
  const description = render();
  const header = description.find('header')
  expect(header.text()).toBe('Description');
});
