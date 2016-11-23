import React from 'react';
import { shallow } from 'enzyme';

import Thumbnail from '../thumbnail';

const render = ({
  thumbnailURL = 'http://'
} = {}) => {
  const props = {
    thumbnailURL
  };
  return shallow(<Thumbnail {...props} />);
};

test('Should render the thumbnail', () => {
  const component = render();
  expect(component.find('img').prop('src')).toBe('http://');
  expect(component.find('div').prop('className')).toBe('thumbnail');
});
