// @flow
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders Create-React-App logo', () => {
  const app = shallow(<App />);
  expect(app.find('.App')).toHaveLength(1);
});
