import React from 'react';
import LoadingIndicator from '../../common/loading-indicator';
import { shallow } from 'enzyme';

const render = () => shallow(<LoadingIndicator />);

test('Should render the loading indicator', () => {
  const loadingIndicator = render();
  expect(loadingIndicator.is('.spinner')).toBe(true);
});

test('Should have 3 dots', () => {
  const loadingIndicator = render();
  expect(loadingIndicator.children().length).toBe(3);
});
